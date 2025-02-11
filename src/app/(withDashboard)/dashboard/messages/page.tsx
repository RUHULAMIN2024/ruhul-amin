"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";

const API_URL = "http://localhost:5000/api/messages";

// Message type definition
type Message = {
  _id: string;
  name: string;
  email: string;
  message: string;
  read: boolean;
};

const Messages: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Fetch messages from API
  const fetchMessages = async (): Promise<void> => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      if (data.success) {
        setMessages(data.data);
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const viewMessage = async (msg: Message): Promise<void> => {
    setSelectedMessage(msg);
    setIsModalOpen(true);

    try {
      await fetch(`${API_URL}/${msg._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ read: true }),
      });

      setMessages(
        messages.map((m) => (m._id === msg._id ? { ...m, read: true } : m))
      );
    } catch (error) {
      console.error("Error updating message:", error);
    }
  };

  const deleteMessage = async (id: string): Promise<void> => {
    try {
      const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (response.ok) {
        setMessages(messages.filter((msg) => msg._id !== id));
        toast("message deleted succesfully");
      }
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Manage Messages</h1>
      <div className="space-y-4">
        {messages.map((msg) => (
          <Card key={msg._id} className={msg.read ? "bg-gray-100" : "bg-white"}>
            <CardContent className="p-5 flex justify-between items-center">
              <div>
                <CardTitle>{msg.name}</CardTitle>
                <p className="text-gray-600">{msg.email}</p>
                <p className="text-gray-800 truncate w-64">{msg.message}</p>
                <span
                  className={`text-sm ${
                    msg.read ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {msg.read ? "Read" : "Unread"}
                </span>
              </div>
              <div className="flex space-x-2">
                <Button
                  className="bg-blue-500"
                  onClick={() => viewMessage(msg)}
                >
                  View
                </Button>
                <Button
                  className="bg-red-500"
                  onClick={() => deleteMessage(msg._id)}
                >
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Message Details</DialogTitle>
          </DialogHeader>
          {selectedMessage && (
            <div className="space-y-4">
              <p>
                <strong>Name:</strong> {selectedMessage.name}
              </p>
              <p>
                <strong>Email:</strong> {selectedMessage.email}
              </p>
              <p>
                <strong>Message:</strong> {selectedMessage.message}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Messages;
