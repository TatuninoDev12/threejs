import CustomButtom from "./CustomButton";

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      <textarea
        className="aipicker-textarea resize-none"
        placeholder="Ask AI..."
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButtom
            type="outline"
            title="Asking AI..."
            customStyles="text-xs"
          />
        ) : (
          <>
            <CustomButtom
              type="outline"
              title="AI Logo"
              customStyles="text-xs"
              handleClick={() => handleSubmit("logo")}
            />
            <CustomButtom
              type="filled"
              title="AI Full"
              customStyles="text-xs"
              handleClick={() => handleSubmit("full")}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AIPicker;
