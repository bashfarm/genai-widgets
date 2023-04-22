import { useEffect, useState } from 'react';
import { GenAISetting } from 'genai';
import { useGenerateTextImage } from '../../hooks/ai_hooks';

interface GenAICardProps {
  description: string;
  imgb64Str?: string;
  genAISetting?: GenAISetting;
}

const GenAICard = ({ description, imgb64Str, genAISetting }: GenAICardProps) => {
  const [editedDescription, setEditedDescription] = useState(description);
  const [aiSetting, setAiSetting] = useState(genAISetting ?? new GenAISetting({ prompt: editedDescription }));
  const [loading, setLoading] = useState(false);
  
  const { imageUrl, handleGenerateClick } = useGenerateTextImage(aiSetting);

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditedDescription(event.target.value);
  };

  useEffect(() => {
    setAiSetting({
      ...aiSetting,
      prompt: editedDescription,
    } as GenAISetting);
  }, [editedDescription]);
    
  return (
    <div className="flex flex-col justify-start items-start bg-white rounded-lg shadow-lg p-6 max-w-md">
      <div className="relative w-full mb-4">
        <img src={imageUrl} alt="Generated" className="w-full h-auto rounded-lg" />
        <button
          className="absolute top-2 right-2 bg-blue-500 text-white rounded-md px-2 py-1 hover:bg-blue-600 focus:outline-none"
          onClick={async () => {
            setLoading(true);
            await handleGenerateClick();
            setLoading(false);
          }}
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Generate'}
        </button>
      </div>
      <label htmlFor="description" className="block text-gray-600 font-medium mb-2">
        Description:
      </label>
      <textarea
        id="description"
        className="w-full rounded-md border border-gray-300 focus:border-blue-500 px-3 py-2 mb-4 text-black"
        value={editedDescription}
        onChange={handleDescriptionChange}
      />
      <button
        className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 focus:outline-none"
        onClick={async () => {
          setLoading(true);
          await handleGenerateClick();
          setLoading(false);
        }}
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Generate'}
      </button>
    </div>
  );
};

export default GenAICard;
