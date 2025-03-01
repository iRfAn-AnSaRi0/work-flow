import React, { useState } from "react";
import {
  MoveRight,
  MoveLeft,
  BellPlus,
  Plus,
  Trash,
  FileText,
  LayoutGrid,
  Edit,
} from "lucide-react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

function WorkflowEditor() {
  const [nodes, setNodes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [newNode, setNewNode] = useState({
    title: "",
    description: "",
    action: "Process",
    reminder: false,
  });

  const handleAddNode = () => {
    setShowModal(true);
    setEditingIndex(null);
    setNewNode({
      title: "",
      description: "",
      action: "Process",
      reminder: false,
    });
  };

  const handleSaveNode = () => {
    if (newNode.title && newNode.description) {
      if (editingIndex !== null) {
        const updatedNodes = [...nodes];
        updatedNodes[editingIndex] = { ...newNode };
        setNodes(updatedNodes);
      } else {
        setNodes([...nodes, { ...newNode }]);
      }
      setShowModal(false);
      setNewNode({
        title: "",
        description: "",
        action: "Process",
        reminder: false,
      });
      setEditingIndex(null);
    }
  };

  const handleDeleteNode = (index) => {
    setNodes(nodes.filter((_, i) => i !== index));
  };

  const handleEditNode = (index) => {
    setEditingIndex(index);
    setNewNode({ ...nodes[index] });
    setShowModal(true);
  };

  const addReminder = (index) => {
    const updatedNodes = [...nodes];
    updatedNodes[index].reminder = true;
    setNodes(updatedNodes);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <button className="flex items-center gap-2 bg-[#8200DB] text-white px-6 py-2 rounded-full shadow-lg text-lg font-semibold hover:bg-[#6c00b9] transition-all duration-300">
        Start <MoveRight size={20} />
      </button>

      <motion.div className="w-[2px] h-10 border-l-2 border-dashed border-[#8200DB]" />

      {nodes.map((node, index) => (
        <div className="flex flex-col items-center w-auto">
        <div key={index} className="flex items-center relative z-[1]">
          <div className="bg-white p-4 w-96 rounded-lg shadow-md border relative">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText size={20} className="text-blue-500" />
                <h3 className="font-semibold">{node.title}</h3>
              </div>
              <LayoutGrid size={20} className="text-gray-500" />
            </div>
            <p className="text-gray-600 text-sm mt-2">{node.description}</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-[#8200DB] border px-3 py-1 rounded-md border-[#8200DB] text-sm font-medium">
                {node.action}
              </span>
              <div className="flex gap-2">
                <button
                  className="text-gray-500"
                  onClick={() => handleEditNode(index)}
                >
                  <Edit size={18} />
                </button>
                <button
                  className="text-red-500"
                  onClick={() => handleDeleteNode(index)}
                >
                  <Trash size={18} />
                </button>
              </div>
            </div>
          </div>

          <div
            className={` ${
              node.reminder ? "bg-green-500" : "bg-[#8a99b2]"
            } bg-[#8a99b2] w-[70px] absolute left-[22rem] z-[-1] text-white p-1 pr-2 rounded-full cursor-pointer`}
            onClick={() => addReminder(index)}
          >
            <BellPlus className="w-6 h-6 float-right" />
          </div>

          {node.reminder && (
            <motion.div className=" w-[5rem] h-[2px] border-t-2 z-[-2] border-dashed border-[#8200DB]" />
          )}

          {node.reminder && (
            <>
              <div className=" bg-green-100 p-3 rounded-md shadow-md border border-green-500 flex items-center gap-2">
                <div className="p-2 bg-green-500 text-white rounded-full">
                <FaWhatsapp className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-green-800 font-medium">
                    WhatsApp Reminder
                  </p>
                  <p className="text-green-600 text-sm">
                    Automated message sent
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
        <motion.div className="w-[2px] h-10 border-l-2 border-dashed border-[#8200DB]" />
        </div>
      ))}
      <button
        className="flex items-center gap-2 bg-[#f5e8ff] text-[#8200DB] px-4 py-2 rounded-full shadow-md text-md font-medium hover:bg-[#e8d4ff] transition-all duration-300"
        onClick={handleAddNode}
      >
        <Plus size={16} /> Add Another
      </button>

      <motion.div className="w-[2px] h-10 border-l-2 border-dashed border-[#8200DB]" />

      <button className="flex items-center gap-2 bg-[#8200DB] text-white px-6 py-2 rounded-full shadow-lg text-lg font-semibold hover:bg-[#6c00b9] transition-all duration-300">
        <MoveLeft size={20} /> Ends
      </button>

      {showModal && (
        <div className="fixed inset-0 z-[1] flex items-center justify-center bg-gray-300 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-2xl w-[420px] border border-gray-400">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">
              {editingIndex !== null ? "Edit Node" : "Add Node"}
            </h2>
            <input
              type="text"
              placeholder="Title"
              className="w-full border p-3 rounded-lg mb-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#8200DB]"
              value={newNode.title}
              onChange={(e) =>
                setNewNode({ ...newNode, title: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Description"
              className="w-full border p-3 rounded-lg mb-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#8200DB]"
              value={newNode.description}
              onChange={(e) =>
                setNewNode({ ...newNode, description: e.target.value })
              }
            />
            <select
              className="w-full border p-3 rounded-lg mb-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#8200DB]"
              value={newNode.action}
              onChange={(e) =>
                setNewNode({ ...newNode, action: e.target.value })
              }
            >
              <option value="Process">Process</option>
              <option value="Deliver">Deliver</option>
              <option value="Verification">Verification</option>
              <option value="Pending">Pending</option>
            </select>
            <div className="flex justify-end gap-3 mt-4">
              <button
                className="px-5 py-2 bg-gray-400 text-white rounded-lg text-lg font-medium hover:bg-gray-500 transition-all"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-5 py-2 bg-[#8200DB] text-white rounded-lg text-lg font-medium hover:bg-[#6c00b9] transition-all"
                onClick={handleSaveNode}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WorkflowEditor;
