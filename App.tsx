
import React, { useState } from 'react';
import { SlideType } from './types';
import ForgettingCurveChart from './components/ForgettingCurveChart';
import FeynmanLab from './components/FeynmanLab';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // مصفوفة الشرائح مع تحديث المحتوى والأمثلة
  const slides = [
    {
      id: 'intro',
      type: SlideType.INTRO,
      title: "إطار العمل المنهجي للتعلم الفعّال",
      subtitle: "منهجية الطلاب المتفوقين لتحليل المعلومات واستيعابها",
      content: (
        <div className="flex flex-col items-center text-center space-y-8 py-6">
          <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center text-white text-3xl shadow-lg mb-2">
            <i className="fas fa-graduation-cap"></i>
          </div>
          <p className="text-gray-600 max-w-2xl leading-relaxed font-medium">
            اضغط على أي محور للانتقال إليه مباشرة والبدء في تعلم أسراره:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
            {[
              { icon: 'fa-brain', label: 'افهم', color: 'bg-indigo-500', slide: 2 },
              { icon: 'fa-database', label: 'تذكّر', color: 'bg-emerald-500', slide: 3 },
              { icon: 'fa-calendar-check', label: 'تخطط', color: 'bg-amber-500', slide: 4 },
              { icon: 'fa-bullseye', label: 'تركيز', color: 'bg-rose-500', slide: 5 }
            ].map((step, idx) => (
              <button 
                key={idx} 
                onClick={() => setCurrentSlide(step.slide)}
                className={`${step.color} p-6 rounded-2xl text-white shadow-md transform hover:scale-105 hover:shadow-xl transition-all flex flex-col items-center justify-center group`}
              >
                <i className={`fas ${step.icon} text-3xl mb-3 group-hover:rotate-12 transition-transform`}></i>
                <div className="font-bold text-xl">{step.label}</div>
                <div className="text-[10px] mt-2 opacity-80 bg-white/20 px-2 py-0.5 rounded-full">انتقال سريع</div>
              </button>
            ))}
          </div>
          <p className="text-sm text-gray-400 mt-4">
            تعتمد هذه الدورة على أحدث أبحاث علوم الأعصاب والتعلم المعرفي.
          </p>
        </div>
      )
    },
    {
      id: 'critique',
      type: SlideType.CRITIQUE,
      title: "لماذا تفشل الطرق التقليدية؟",
      subtitle: "نقد أساليب الدراسة منخفضة الفائدة (Low Utility)",
      content: (
        <div className="space-y-6 py-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-6 rounded-2xl border-r-4 border-red-500">
              <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                <i className="fas fa-times-circle"></i> وهم الفهم (Fluency Illusion)
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                عندما تعيد القراءة أو تظلل، تشعر أن المعلومة مألوفة لأن عينك تعودت عليها، لكن دماغك لم يقم بجهد لتخزينها. هذا يسمى "وهم الإتقان".
              </p>
            </div>
            <div className="bg-amber-50 p-6 rounded-2xl border-r-4 border-amber-500">
              <h4 className="font-bold text-amber-800 mb-2 flex items-center gap-2">
                <i className="fas fa-exclamation-triangle"></i> التظليل السلبي
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                تحويل الصفحة إلى "لوحة فنية" بالألوان يستهلك طاقتك دون فائدة. 
                <strong className="block mt-2 text-amber-900">القاعدة الذهبية:</strong> 
                ظلل الكلمة المفتاحية فقط، لا تظلل الجملة كاملة أبداً.
              </p>
            </div>
          </div>
          <div className="bg-gray-100 p-6 rounded-2xl text-center">
            <h5 className="font-bold text-gray-800 mb-2">💡 مثال على فشل التلخيص:</h5>
            <p className="text-sm text-gray-600 italic">
              "كتابة صفحتين من الملاحظات بينما الكتاب مفتوح أمامك هو مجرد (نسخ خطي) وليس تعلماً. الدماغ هنا في وضع الخمول (Passive Mode)."
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'understanding',
      type: SlideType.UNDERSTANDING,
      title: "الخطوة الأولى: افهم (Deep Understanding)",
      subtitle: "كيف تحول المعلومات المعقدة إلى معرفة بديهية؟",
      content: (
        <div className="space-y-6">
          <div className="bg-indigo-50 p-5 rounded-xl">
            <h4 className="font-bold text-indigo-900 mb-3 underline">مثال تطبيقي: تقنية فاينمان (شرح التمثيل الضوئي)</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-100">
                <p className="font-bold text-red-600 mb-1">❌ شرح معقد (غير فاينمان):</p>
                <p>"التمثيل الضوئي هو عملية كيميائية حيوية تستخدم فيها النباتات طاقة الفوتونات لإنتاج الجلوكوز..."</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-emerald-100">
                <p className="font-bold text-emerald-600 mb-1">✅ شرح فاينمان (لطفل):</p>
                <p>"النبات مثل المصنع الصغير، يأخذ ضوء الشمس كوقود، ويسحب الماء وثاني أكسيد الكربون ليصنع كعكة لذيذة (السكر) يأكلها ليعيش."</p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-r-4 border-blue-500 pr-4">
              <h5 className="font-bold text-blue-900">التكوين الكتلي (Chunking)</h5>
              <p className="text-sm text-gray-600">مثال: لحفظ الرقم 191419451991، قسمه إلى كتل تاريخية (الحرب العالمية 1، الحرب العالمية 2، حرب الخليج). هكذا تستهلك مساحة أقل في ذاكرتك.</p>
            </div>
            <div className="border-r-4 border-emerald-500 pr-4">
              <h5 className="font-bold text-emerald-900">تحديد النطاق (Scoping)</h5>
              <p className="text-sm text-gray-600">قبل البدء بأي فصل، اقرأ الفهرس، العناوين الكبيرة، والملخص النهائي. ابنِ "الهيكل" أولاً ثم املأ الفراغات بالتفاصيل.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'memory',
      type: SlideType.MEMORY,
      title: "الخطوة الثانية: تذكّر (Active Recall)",
      subtitle: "كيف تجبر دماغك على تثبيت المعلومة للأبد؟",
      content: (
        <div className="space-y-6">
          <div className="bg-emerald-50 p-5 rounded-xl">
            <h4 className="font-bold text-emerald-900 mb-3 underline">مثال تطبيقي: نظام الأسئلة (بديل الملاحظات)</h4>
            <div className="bg-white p-4 rounded-lg border border-emerald-200">
              <p className="text-sm text-gray-500 mb-2">بدلاً من كتابة: "ولد نابليون في جزيرة كورسيكا عام 1769"، اكتب في ملاحظاتك سؤالاً:</p>
              <div className="flex items-center gap-3 bg-emerald-600 text-white p-3 rounded-lg font-bold">
                <i className="fas fa-question-circle"></i>
                <span>متى وأين ولد نابليون؟ وما تأثير ذلك على طفولته؟</span>
              </div>
              <p className="text-xs text-gray-400 mt-2 italic">*عند المراجعة، غطِّ الإجابة وحاول استدعاء المعلومة بصعوبة. هذا الجهد هو ما يبني الذاكرة.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
              <h5 className="font-bold mb-1 text-sm">خرائط العقل الصامتة:</h5>
              <p className="text-xs text-gray-600">بعد الدراسة، ارسم خريطة ذهنية كاملة من ذاكرتك فقط (بدون النظر للكتاب). قارن ما رسمته بالكتاب لتكتشف "الفجوات" في ذاكرتك.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
              <h5 className="font-bold mb-1 text-sm">قاعدة الـ 5 ثواني في الفلاش كارد:</h5>
              <p className="text-xs text-gray-600">إذا لم تتذكر الإجابة خلال 5 ثوانٍ، اعتبر البطاقة "صعبة" وكررها بعد دقيقة. لا تطل التفكير.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'planning',
      type: SlideType.REPETITION,
      title: "الخطوة الثالثة: تخطط (The Scientific Plan)",
      subtitle: "وداعاً للجداول التقليدية الجامدة.. مرحباً بالمرونة",
      content: (
        <div className="space-y-4">
          <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-900 text-sm mb-2">الجدول الاستعادي (Retrospective Timetable)</h4>
            <table className="w-full text-xs text-right bg-white rounded-lg overflow-hidden">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-2 border">الموضوع</th>
                  <th className="p-2 border">تاريخ الدراسة</th>
                  <th className="p-2 border text-center">الثقة (Rating)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border">قوانين الحركة (فيزياء)</td>
                  <td className="p-2 border">12 أكتوبر</td>
                  <td className="p-2 border text-center bg-red-400 text-white font-bold">ضعيف</td>
                </tr>
                <tr>
                  <td className="p-2 border">الحروب الصليبية (تاريخ)</td>
                  <td className="p-2 border">13 أكتوبر</td>
                  <td className="p-2 border text-center bg-emerald-400 text-white font-bold">ممتاز</td>
                </tr>
                <tr>
                  <td className="p-2 border">الأحماض والقواعد (كيمياء)</td>
                  <td className="p-2 border">14 أكتوبر</td>
                  <td className="p-2 border text-center bg-amber-400 text-white font-bold">متوسط</td>
                </tr>
              </tbody>
            </table>
            <p className="text-[10px] text-gray-500 mt-2">مبدأ هذا الجدول: "أنا لا أقرر ماذا سأدرس غداً، بل أرى أي موضوع (أحمر اللون) يحتاج مني مراجعة عاجلة اليوم."</p>
          </div>
          <ForgettingCurveChart />
        </div>
      )
    },
    {
      id: 'focus',
      type: SlideType.AI_LAB, // Reusing AI_LAB mapping concept or extending
      title: "الخطوة الرابعة: التركيز (Focus Flow)",
      subtitle: "حماية وقتك من المشتتات الرقمية",
      content: (
        <div className="grid md:grid-cols-2 gap-6 py-6">
          <div className="space-y-4">
            <div className="bg-rose-50 p-5 rounded-2xl border-r-4 border-rose-500">
              <h4 className="font-bold text-rose-900 mb-2">قاعدة الـ 20 دقيقة (Deep Work)</h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                الدماغ يحتاج 15-20 دقيقة للوصول لـ "حالة التدفق". في كل مرة تنظر فيها لهاتفك، تعيد العداد للصفر!
              </p>
            </div>
            <div className="bg-blue-50 p-5 rounded-2xl border-r-4 border-blue-500">
              <h4 className="font-bold text-blue-900 mb-2">تقنية "البومودورو" المعدلة</h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                ادرس 50 دقيقة بتركيز عالٍ، خذ استراحة 10 دقائق (بعيداً عن الشاشات). كرر ذلك 3 مرات.
              </p>
            </div>
          </div>
          <div className="bg-indigo-900 text-white p-6 rounded-2xl flex flex-col items-center justify-center text-center shadow-inner">
            <i className="fas fa-mobile-alt text-4xl mb-4 opacity-50"></i>
            <h4 className="font-bold text-xl mb-2">نصيحة "خارج الغرفة"</h4>
            <p className="text-sm opacity-80">
              وجود الهاتف في نفس الغرفة يقلل من قدرتك الإدراكية بنسبة 10% حتى لو كان مغلقاً. ضعه في غرفة أخرى تماماً أثناء الدراسة العميقة.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'ai-lab',
      type: SlideType.AI_LAB,
      title: "مختبر التعلم الذكي (Feynman Lab)",
      subtitle: "استخدم الذكاء الاصطناعي لتبسيط أصعب المفاهيم",
      content: (
        <div className="py-2">
          <div className="bg-indigo-100 p-3 rounded-lg mb-4 text-xs text-indigo-800 text-center">
            تذكر: هذا المعلم الذكي موجود لمساعدتك على "الفهم" وليس "الحل بدلاً منك".
          </div>
          <FeynmanLab />
        </div>
      )
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <button 
           onClick={() => setCurrentSlide(0)}
           className="flex items-center gap-3 hover:opacity-80 transition cursor-pointer"
        >
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
            <i className="fas fa-brain"></i>
          </div>
          <h1 className="font-black text-xl text-indigo-900 hidden sm:block">إطار التعلم الفعّال</h1>
        </button>
        <div className="flex gap-2">
          {slides.map((_, idx) => (
            <button 
              key={idx} 
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-8 bg-indigo-600' : 'w-4 bg-gray-200'}`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
        <div className="text-sm font-bold text-gray-400">
          {currentSlide + 1} / {slides.length}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow container mx-auto px-4 py-8 max-w-5xl">
        <div className="slide-enter bg-white p-6 md:p-10 rounded-3xl shadow-xl min-h-[65vh] flex flex-col relative overflow-hidden">
          {/* Decorative subtle background icon */}
          <div className="absolute top-10 left-10 text-gray-50 text-9xl -rotate-12 pointer-events-none select-none">
             <i className="fas fa-lightbulb"></i>
          </div>
          
          <div className="mb-8 border-r-4 border-indigo-600 pr-4 relative z-10">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">{slides[currentSlide].title}</h2>
            {slides[currentSlide].subtitle && (
              <p className="text-indigo-600 font-medium mt-2">{slides[currentSlide].subtitle}</p>
            )}
          </div>
          <div className="flex-grow relative z-10">
            {slides[currentSlide].content}
          </div>
        </div>
      </main>

      {/* Navigation Controls */}
      <footer className="bg-white border-t p-6 sticky bottom-0 z-50">
        <div className="container mx-auto max-w-5xl flex justify-between items-center">
          <button 
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`px-8 py-3 rounded-2xl font-bold transition flex items-center gap-2 ${currentSlide === 0 ? 'bg-gray-100 text-gray-300 cursor-not-allowed' : 'bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50'}`}
          >
            <i className="fas fa-chevron-right"></i>
            السابق
          </button>
          
          <div className="hidden md:flex flex-col items-center">
             <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">تصفح المنهج التعليمي</p>
          </div>

          <button 
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`px-8 py-3 rounded-2xl font-bold transition flex items-center gap-2 ${currentSlide === slides.length - 1 ? 'bg-emerald-100 text-emerald-400 cursor-not-allowed' : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200'}`}
          >
            {currentSlide === slides.length - 1 ? 'انتهى الدرس' : 'التالي'}
            <i className="fas fa-chevron-left"></i>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default App;
