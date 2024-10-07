const faqs = [
  {
    question: "ما هو الفرق بين == و === في JavaScript؟",
    answer: `== يقوم بمقارنة القيم بعد إجراء تحويل نوع (type coercion)، أي أنه يحاول تحويل القيم إلى نفس النوع قبل المقارنة. مثلًا، 5 == "5" تكون صحيحة.
    === يقوم بمقارنة القيم دون إجراء أي تحويل، لذا يجب أن تكون القيم من نفس النوع ونفس القيمة. في هذه الحالة، 5 === "5" تكون خاطئة لأن النوع مختلف.`,
  },
  {
    question: "ما هو الـ Event Bubbling في JavaScript؟",
    answer: `Event Bubbling هو سلوك يحدث عندما يتم استدعاء حدث (event) على عنصر معين في DOM. يبدأ الحدث من العنصر المحدد ثم ينتقل تدريجيًا إلى العناصر الأم (من الأسفل إلى الأعلى). يمكن إيقاف هذا السلوك باستخدام event.stopPropagation().`,
  },
  {
    question: "ما هو الفرق بين let, var, و const في JavaScript؟",
    answer: `var: له نطاق على مستوى الوظيفة (function-scoped) ويمكن إعادة تعيينه وتكراره.
    let: له نطاق على مستوى الكتلة (block-scoped) ولا يمكن تكراره، لكنه يمكن إعادة تعيينه.
    const: له نطاق على مستوى الكتلة (block-scoped) ولا يمكن تكراره ولا إعادة تعيينه.`,
  },
  // يمكنك إضافة المزيد من الأسئلة هنا
];

export default faqs;
