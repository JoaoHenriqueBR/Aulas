import Phrase from "./Phrase";
import axios from "axios";

const { useState } = require("react");

const PhraseGenerator = () => {
  const [phrase, setPhrase] = useState({ content: "", author: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getRandomPhrase = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://dummyjson.com/quotes/random");
      const data = response.data;
      setPhrase({
        content: data.quote,
        author: data.author,
      });
    } catch (error) {
      setError("Erro ao buscar a frase");
      console.error("Erro ao buscar a frase: ", error);
    } finally {
      setLoading(false);
    }
  };


  if (loading) {
    return (
      <div className="min-h-20">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

  if (error) {
    <div className="min-h-20">
      <p className="text-lg">{error}</p>
    </div>;
  }
  return (
    <div className="min-h-20 flex flex-col gap-4 items-start">
      <Phrase text={phrase.content} author={phrase.author} />
      <button className="bg-gradient-to-r from-teal-500 to-sky-500 p-2 rounded-lg shadow-md text-white" onClick={getRandomPhrase}>
        Nova Frase
      </button>
    </div>
  );
};

export default PhraseGenerator;
