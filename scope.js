window.STUDY_SCOPE = {
  updated: "2026-09-23",
  social: {
    title: "社会",
    core: ["塾テキスト：歴史24〜32"],
    focus: [
      "年代・並べ替え（古代〜江戸時代までを時代の流れで確認）",
      "人物と政策・改革の組み合わせ",
      "文化・外交・貿易",
      "正誤問題（似た人物・制度・出来事の区別）",
      "理由説明（政策・戦い・社会変化の背景と結果）",
      "戦国〜江戸時代の政治・社会の変化"
    ],
    added: [
      "追加教材：スキャン 2026/09/20 15:14:52.pdf（24ページ）",
      "追加教材：スキャン 2026/09/20 15:18:16.pdf（7ページ）",
      "試作スキャン（2026/09/21・3教材）：江戸時代までの内容のみ学習対象"
    ]
  },
  science: {
    title: "理科",
    core: ["塾テキスト：理科24〜32"],
    focus: ["月の光・満ち欠け・太陽との位置関係","星の明るさ・星座の見方","金属の燃焼と比例計算","実験条件・測定・読み取り","理由説明・考察"],
    added: []
  }
};

// 2026-09-23: 9/21の3教材はパラパラスキャン試作。江戸時代までの内容だけを学習に使用する。
(function(){
  const socialExtra = [
    {q:"江戸幕府が大名を統制するために定めた決まりとして最も適切なものはどれですか？",type:"choice",choices:["武家諸法度","御成敗式目","墾田永年私財法","十七条の憲法"],answer:"武家諸法度",hint:"江戸時代の大名に対する決まりです。",explanation:"江戸幕府は武家諸法度を定め、大名を統制しました。"},
    {q:"豊臣秀吉が刀狩と太閤検地を進めたことと最も関係が深いものはどれですか？",type:"choice",choices:["兵農分離","摂関政治","院政","鎖国の完成"],answer:"兵農分離",hint:"武士と農民の身分を分ける動きです。",explanation:"刀狩と太閤検地は、武士と農民を分ける兵農分離を進める政策でした。"},
    {q:"次の組み合わせのうち誤っているものはどれですか？",type:"choice",choices:["徳川家康―江戸幕府","豊臣秀吉―刀狩","足利義満―日明貿易","北条泰時―武家諸法度"],answer:"北条泰時―武家諸法度",hint:"北条泰時は鎌倉時代の人物です。",explanation:"北条泰時が定めたのは御成敗式目。武家諸法度は江戸幕府が大名統制のために定めました。"}
  ];
  const yearExtra = [
    {q:"江戸幕府が開かれた1603年と結びつく人物は誰ですか？",type:"choice",choices:["徳川家康","豊臣秀吉","足利義満","北条泰時"],answer:"徳川家康",hint:"江戸幕府の初代将軍です。",explanation:"1603年、徳川家康が征夷大将軍となり江戸幕府を開きました。"}
  ];
  Object.defineProperty(window,"QUESTION_BANK",{
    configurable:true,
    set:function(v){
      if(v && v.social) v.social = v.social.concat(socialExtra);
      if(v && v.year) v.year = v.year.concat(yearExtra);
      Object.defineProperty(window,"QUESTION_BANK",{value:v,writable:true,configurable:true,enumerable:true});
    }
  });
})();