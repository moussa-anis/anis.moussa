
import React, { useState } from 'react';
import { explainSimply, evaluateUnderstanding } from '../services/geminiService';

const FeynmanLab: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [explanation, setExplanation] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState<'explain' | 'evaluate'>('explain');

  const handleAction = async () => {
    if (!topic && mode === 'explain') return;
    if ((!topic || !explanation) && mode === 'evaluate') return;

    setLoading(true);
    setResult('');
    
    try {
      if (mode === 'explain') {
        const res = await explainSimply(topic);
        setResult(res);
      } else {
        const res = await evaluateUnderstanding(explanation, topic);
        setResult(res);
      }
    } catch (e) {
      setResult("عذراً، حدث خطأ ما.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-indigo-50 p-6 rounded-2xl shadow-lg border border-indigo-100 max-w-4xl mx-auto">
      <div className="flex justify-center mb-6 gap-2">
        <button 
          onClick={() => setMode('explain')}
          className={`px-4 py-2 rounded-lg transition ${mode === 'explain' ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-600'}`}
        >
          أريد شرحاً مبسطاً
        </button>
        <button 
          onClick={() => setMode('evaluate')}
          className={`px-4 py-2 rounded-lg transition ${mode === 'evaluate' ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-600'}`}
        >
          قيّم فهمي للموضوع
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">الموضوع:</label>
          <input 
            type="text" 
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="مثلاً: التمثيل الضوئي، قانون نيوتن الثاني..."
            className="w-full p-3 rounded-lg border border-indigo-200 focus:ring-2 focus:ring-indigo-500 outline-none"
          />
        </div>

        {mode === 'evaluate' && (
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">شرحك الخاص:</label>
            <textarea 
              rows={4}
              value={explanation}
              onChange={(e) => setExplanation(e.target.value)}
              placeholder="اشرح الموضوع كما تفهمه الآن بأسلوبك الخاص..."
              className="w-full p-3 rounded-lg border border-indigo-200 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>
        )}

        <button 
          onClick={handleAction}
          disabled={loading}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl transition duration-300 flex items-center justify-center gap-2"
        >
          {loading ? (
            <i className="fas fa-spinner fa-spin"></i>
          ) : (
            <i className="fas fa-magic"></i>
          )}
          {mode === 'explain' ? 'ابدأ التبسيط' : 'حلل فهمي'}
        </button>

        {result && (
          <div className="mt-6 p-4 bg-white rounded-xl border border-indigo-100 slide-enter">
            <h5 className="font-bold text-indigo-800 mb-2 border-b pb-2">
              {mode === 'explain' ? 'شرح فاينمان المقترح:' : 'تقييم المدرب الذكي:'}
            </h5>
            <div className="text-gray-700 leading-relaxed whitespace-pre-wrap text-right">
              {result}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeynmanLab;
