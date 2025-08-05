import { RxCross2 } from "react-icons/rx";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import db from "@/lib/firebase";
import { updateDoc,doc} from "firebase/firestore"

interface Note {
  id: string;
  title: string;
  description: string;
  star: boolean;
  category: string;
}

interface Props {
  editNote: Note | null;
  setEditNote: (note: Note | null) => void;
  setEdit: (edit: boolean) => void;
}

const Overlay = ({ editNote, setEditNote, setEdit }: Props) => {
  const MAX_LENGTH = 200;
  const [loading, setLoading] = useState(false);

  // Local form states
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  // Pre-fill from editNote if it exists
  useEffect(() => {
    if (editNote) {
      setTitle(editNote.title || '');
      setDescription(editNote.description || '');
      setCategory(editNote.category || '');
    }
  }, [editNote]);

  const handleSubmit = async () => {
    if (!title || !description) return;

    setLoading(true);
    try {
      const noteRef = doc(db, "notes", editNote?.id || "");
      await updateDoc(noteRef, {
        title,
        description,
        category,
        });
      setEdit(false);
      setEditNote(null);
    } catch (error) {
      console.error("Error saving note:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 z-40 flex items-center justify-center">
      <div className="w-[480px] bg-white rounded-md shadow-lg p-6 z-50">
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b-2 pb-2">
          <h2 className="text-2xl font-Poppins font-bold text-black">Edit Note</h2>
          <RxCross2 size={30} className="cursor-pointer" onClick={() => setEdit(false)} />
        </div>

        {/* Title Input */}
        <div className="mt-3">
          <label className="text-lg font-Poppins">Title</label>
          <Input
            type="text"
            placeholder="Enter a compelling title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full py-5 rounded-md border-2 border-gray-300 shadow-none mt-1 bg-gray-50"
          />
        </div>

        {/* Content Textarea */}
        <div className="mt-2">
          <label className="text-lg font-Poppins">Content</label>
          <Textarea
            rows={6}
            maxLength={MAX_LENGTH}
            placeholder="Share your thoughts..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full rounded-md border-2 border-gray-300 shadow-none mt-1 bg-gray-50"
          />
          <div className="text-right text-sm text-gray-500 mt-1">
            {description.length}/{MAX_LENGTH} characters
          </div>
        </div>

        {/* Category Select */}
        <div className="mt-2">
          <label className="text-lg font-Poppins">Category</label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-full py-5 rounded-md border-2 border-gray-300 shadow-none mt-1 bg-gray-50">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent side="bottom" sideOffset={4} className="z-[9999]">
              <SelectItem value="ideas">Ideas</SelectItem>
              <SelectItem value="work">Work</SelectItem>
              <SelectItem value="personal">Personal</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Submit Button */}
        <div className="mt-5">
          <Button
            className={`w-full py-5 text-lg ${
              !title || !description
                ? "cursor-not-allowed opacity-50"
                : "cursor-pointer hover:scale-102 hover:shadow-xl"
            }`}
            disabled={!title || !description}
            onClick={handleSubmit}
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <span className="loading loading-spinner loading-xs"></span>
                <p>Saving...</p>
              </div>
            ) : (
              "Save the Notes"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
