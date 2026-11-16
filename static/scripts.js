



// === Анимация реакции в лаборатории ===
document.addEventListener("DOMContentLoaded", () => {
    const startReactionBtn = document.getElementById("start-reaction");
    const reactionContainer = document.getElementById("reaction-container");

    if (startReactionBtn) {
        startReactionBtn.addEventListener("click", () => {
            reactionContainer.innerHTML = "<p>Реакция запущена... 🔥💨</p>";
            reactionContainer.style.backgroundColor = "yellow";

            setTimeout(() => {
                reactionContainer.innerHTML = "<p>Реакция завершена! ✅</p>";
                reactionContainer.style.backgroundColor = "lightgreen";
            }, 3000);
        });
    }
});





document.addEventListener("DOMContentLoaded", function () {
    console.log("Скрипт загружен и работает!");

    // Добавление анимации к карточкам фактов
    const factCards = document.querySelectorAll(".fact.card");
    factCards.forEach((card) => {
        card.addEventListener("mouseover", function () {
            card.style.transform = "scale(1.05)";
            card.style.boxShadow = "0px 6px 12px rgba(0, 0, 0, 0.2)";
        });

        card.addEventListener("mouseleave", function () {
            card.style.transform = "scale(1)";
            card.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
        });
    });

    // Рандомизация порядка отображения фактов при загрузке страницы
    const factsContainer = document.querySelector(".facts-list");
    if (factsContainer) {
        let facts = Array.from(factsContainer.children);
        facts.sort(() => Math.random() - 0.5);
        facts.forEach((fact) => factsContainer.appendChild(fact));
    }
});





document.addEventListener("DOMContentLoaded", function () {
    console.log("Скрипт загружен");

    const form = document.getElementById("quizForm");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const questions = document.querySelectorAll(".question");
            let score = 0;

            questions.forEach((question) => {
                const correct = question.dataset.correct.trim();
                const qNumber = question.dataset.question;
                const selected = document.querySelector(`input[name="q${qNumber}"]:checked`);
                
                if (selected && selected.value === correct) {
                    score++;
                }
            });

            const result = document.getElementById("quizResult");
            if (result) {
                result.textContent = `Вы набрали ${score} из ${questions.length} баллов!`;
                result.style.color = score === questions.length ? "green" : "red";
            }
        });
    } else {
        console.log("Элемент quizForm не найден (это нормально для этой страницы)");
    }
});









document.addEventListener("DOMContentLoaded", function () {
    const theoryData = {
        law_conservation: {
            title: "Закон сохранения массы",
            text: "Масса веществ, вступивших в химическую реакцию, равна массе продуктов реакции. Этот закон был открыт М. В. Ломоносовым и подтверждён А. Лавуазье.При химических реакциях атомы не исчезают и не появляются, а переходят из одних веществ в другие. Продукты реакции образуются из атомов, содержащихся в исходных веществах, поэтому масса остаётся неизменной.",
            image: "/static/img/theory/soxmas.jpg"
        },
        periodic_law: {
            title: "Периодический закон Менделеева",
            text: "Свойства химических элементов находятся в периодической зависимости от заряда их атомных ядер. Это позволяет предсказывать характеристики ещё не открытых элементов. Итак, современная формулировка периодического закона гласит: Свойства элементов, а также структура и свойства их соединений находятся в периодической зависимости от величины заряда ядер их атомов. Таким образом возможно изменение свойств химических элементов в определённых сочетаниях и повторение их через определенное число элементов. Наглядно периодический закон отражает Периодическая система химических элементов Менделеева (ПСХЭ), которая разделена на группы и периоды.",
            image:"/static/img/theory/period.png"
        },
        electronegativity: {
            title: "Электроотрицательность",
            text: "Способность атома притягивать к себе электроны. Чем выше электроотрицательность, тем сильнее атом притягивает электроны в соединениях.",
            image:"/static/img/theory/riad.png"
        }
    };

    window.showTheory = function (key) {
        const content = document.getElementById("theory-content");
        document.getElementById("theory-title").textContent = theoryData[key].title;
        document.getElementById("theory-text").textContent = theoryData[key].text;
        document.getElementById("theory-image").src = theoryData[key].image;
        content.classList.remove("hidden");
        content.style.display = "block";
        document.getElementById("theory-overlay").style.display = "block";
    };

    window.hideTheory = function () {
        document.getElementById("theory-content").style.display = "none";
        document.getElementById("theory-overlay").style.display = "none";
    };
});








    const elementsData = {
            H: { name: "Водород", details: "Самый лёгкий элемент, используется в водородном топливе и термоядерных реакциях.", image:"/static/img/table/H.jpg" },
            He: { name: "Гелий", details: "Инертный газ, используется в аэростатах и криогенной технике.", image: "/static/img/table/He.jpg" },

            Li: { name: "Литий", details: "Лёгкий металл, используется в аккумуляторах и фармацевтике.", image: "/static/img/table/Lit.jpg" },
            Be: { name: "Бериллий", details: "Жёсткий металл, используется в аэрокосмической промышленности.", image:"/static/img/table/Be1.jpg" },
            B: { name: "Бор", details: "Полуметалл, применяется в стекле и антисептиках.", image:"/static/img/table/B.jpg" },
            C: { name: "Углерод", details: "Основной элемент органической химии, существует в форме графита и алмаза.", image:"/static/img/table/C.jpg" },
            N: { name: "Азот", details: "Составляет 78% атмосферы, важен для белков и ДНК.", image:"/static/img/table/N.jpg" },
            O: { name: "Кислород", details: "Необходим для дыхания, входит в состав воды.", image:"/static/img/table/O2.jpg" },
            F: { name: "Фтор", details: "Очень реакционноспособен, используется в зубной пасте.", image:"/static/img/table/F.png" },
            Ne: { name: "Неон", details: "Инертный газ, используется в неоновых вывесках.", image:"/static/img/table/Ne.jpg" },

            Na: { name: "Натрий", details: "Мягкий металл, входит в состав соли.", image:"/static/img/table/Na.jpg" },
            Mg: { name: "Магний", details: "Используется в сплавах и пиротехнике.", image:"/static/img/table/Mg.jpg" },
            Al: { name: "Алюминий", details: "Лёгкий металл, широко используется в строительстве.", image:"/static/img/table/Al3.jpg" },
            Si: { name: "Кремний", details: "Полупроводник, основа современной электроники.", image:"/static/img/table/Si.jpg" },
            P: { name: "Фосфор", details: "Содержится в ДНК и удобрениях.", image:"/static/img/table/P.png" },
            S: { name: "Сера", details: "Используется в резине и лекарственных препаратах.", image:"/static/img/table/S.jpg" },
            Cl: { name: "Хлор", details: "Обеззараживает воду, входит в состав соли.", image:"/static/img/table/Cl1.jpg" },
            Ar: { name: "Аргон", details: "Инертный газ, используется в лампах.", image:"/static/img/table/Ar.jpg" },

            K: { name: "Калий", details: "Важен для функций мышц и сердца.", image:"/static/img/table/K1.jpg" },
            Ca: { name: "Кальций", details: "Основной компонент костей и зубов.", image:"/static/img/table/Ca2.jpg" },
            Sc: { name: "Скандий", details: "Редкий металл, используется в сплавах и освещении.", image:"/static/img/table/Sc1.jpg" },
            Ti: { name: "Титан", details: "Прочный и лёгкий металл, применяется в авиации и медицине.", image:"/static/img/table/Ti.jpg" },
            V: { name: "Ванадий", details: "Используется в производстве стали и катализаторах.", image:"/static/img/table/V.jpg" },
            Cr: { name: "Хром", details: "Применяется для покрытия металлов и в производстве красок.", image:"/static/img/table/Cr.jpg" },
            Mn: { name: "Марганец", details: "Необходим для производства стали и ферментов.", image:"/static/img/table/Mn2.jpg" },
            Fe: { name: "Железо", details: "Основной компонент стали, важен для крови.", image:"/static/img/table/Fe.jpg" },
            Co: { name: "Кобальт", details: "Используется в аккумуляторах и магнитах.", image:"/static/img/table/Co.jpg" },
            Ni: { name: "Никель", details: "Применяется в сплавах и монетах.", image:"/static/img/table/Ni.jpg" },
            Cu: { name: "Медь", details: "Хороший проводник, используется в электропроводке.", image:"/static/img/table/Cu3.jpg" },
            Zn: { name: "Цинк", details: "Используется для защиты от коррозии и в медицине.", image:"/static/img/table/Zn.jpg" },
            Ga: { name: "Галлий", details: "Применяется в электронике и термометрах.", image:"/static/img/table/Ga1.jpg" },
            Ge: { name: "Германий", details: "Полупроводник, используется в оптике и электронике.", image:"/static/img/table/Ge.jpg" },
            As: { name: "Мышьяк", details: "Токсичный элемент, используется в полупроводниках.", image:"/static/img/table/As1.jpg" },
            Se: { name: "Селен", details: "Используется в стекле и фотокопировании.", image:"/static/img/table/Se.jpg" },
            Br: { name: "Бром", details: "Применяется в огнеупорных материалах и фотографии.", image:"/static/img/table/Br.jpg" },
            Kr: { name: "Криптон", details: "Инертный газ, используется в освещении.", image:"/static/img/table/Kr.jpg" },

            Rb: { name: "Рубидий", details: "Используется в исследовательских целях и фотоклетках.", image:"/static/img/table/Rb.jpg" },
            Sr: { name: "Стронций", details: "Применяется в пиротехнике и медицинских исследованиях.", image:"/static/img/table/Sr.jpg" },
            Y: { name: "Иттрий", details: "Используется в лазерах и сверхпроводниках.", image:"/static/img/table/Y.jpg" },
            Zr: { name: "Цирконий", details: "Применяется в ядерных реакторах и керамике.", image:"/static/img/table/Zr.jpg" },
            Nb: { name: "Ниобий", details: "Используется в сверхпроводниках и сплавах.", image:"/static/img/table/Nb.jpg" },
            Mo: { name: "Молибден", details: "Применяется в сталелитейной промышленности и ферментах.", image:"/static/img/table/Mo.jpg" },
            Tc: { name: "Технеций", details: "Искусственный элемент, используется в медицине.", image:"/static/img/table/Tc1a.jpg" },
            Ru: { name: "Рутений", details: "Применяется в электронике и катализаторах.", image:"/static/img/table/Ru3a.jpg" },
            Rh: { name: "Родий", details: "Используется в катализаторах и ювелирных изделиях.", image:"/static/img/table/Rh.jpg" },
            Pd: { name: "Палладий", details: "Применяется в автомобильных катализаторах и электронике.", image:"/static/img/table/Pd5a.jpg" },
            Ag: { name: "Серебро", details: "Драгоценный металл, используется в ювелирных изделиях и электронике.", image:"/static/img/table/Ag.jpg" },
            Cd: { name: "Кадмий", details: "Токсичный металл, применяется в аккумуляторах.", image:"/static/img/table/Cd.jpg" },
            In: { name: "Индий", details: "Используется в дисплеях и полупроводниках.", image:"/static/img/table/In2.jpg" },
            Sn: { name: "Олово", details: "Применяется в сплавах и покрытии консервных банок.", image:"/static/img/table/Sn.jpg" },
            Sb: { name: "Сурьма", details: "Полуметалл, используется в огнеупорных материалах и аккумуляторах.", image:"/static/img/table/Sb2a.jpg" },
            Te: { name: "Теллур", details: "Полуметалл, применяется в металлургии и электронике.", image:"/static/img/table/Te1.jpg" },
            I: { name: "Йод", details: "Галоген, необходим для работы щитовидной железы.", image:"/static/img/table/I1.jpg" },
            Xe: { name: "Ксенон", details: "Благородный газ, используется в осветительных приборах и медицинской анестезии.", image:"/static/img/table/Xe.jpg" },

            Cs: { name: "Цезий", details: "Щелочной металл, используется в атомных часах и в бурении скважин.", image:"/static/img/table/Cs.jpg" },
            Ba: { name: "Барий", details: "Применяется в медицинской визуализации и фейерверках.", image:"/static/img/table/Ba1.jpg" },
            Hf: { name: "Гафний", details: "Применяется в ядерных реакторах и микроэлектронике.", image:"/static/img/table/Hf3.jpg" },
            Ta: { name: "Тантал", details: "Устойчив к коррозии, используется в электронике и медицинских имплантах.", image:"/static/img/table/Tantal.jpg" },
            W: { name: "Вольфрам", details: "Обладает высокой температурой плавления, применяется в лампах и инструментах.", image:"/static/img/table/W.jpg" },
            Re: { name: "Рений", details: "Редкий металл, используется в авиационных турбинах и катализаторах.", image:"/static/img/table/Re.jpg" },
            Os: { name: "Осмий", details: "Очень плотный металл, используется в сплавах и перьях для ручек.", image:"/static/img/table/Os.jpg" },
            Ir: { name: "Иридий", details: "Устойчив к коррозии, применяется в химической промышленности и электронике.", image:"/static/img/table/Ir.jpg" },
            Pt: { name: "Платина", details: "Драгоценный металл, используется в ювелирных изделиях и катализаторах.", image:"/static/img/table/Pt8a.jpg" },
            Au: { name: "Золото", details: "Драгоценный металл, широко используется в ювелирных изделиях и электронике.", image:"/static/img/table/Au_crystals1.jpg" },
            Hg: { name: "Ртуть", details: "Единственный жидкий металл при комнатной температуре, токсичен, ранее использовался в термометрах.", image:"/static/img/table/Hg.jpg" },
            Tl: { name: "Таллий", details: "Токсичный металл, используется в электронике и оптике.", image:"/static/img/table/Tl.jpg" },
            Pb: { name: "Свинец", details: "Тяжелый металл, применяется в аккумуляторах и защите от радиации.", image:"/static/img/table/pb.jpg" },
            Bi: { name: "Висмут", details: "Нетоксичный заменитель свинца, используется в косметике и медицине.", image:"/static/img/table/bi.jpg" },
            Po: { name: "Полоний", details: "Радиоактивный элемент, используется в источниках тепла для космических аппаратов.", image:"/static/img/table/po.png" },
            At: { name: "Астат", details: "Редкий и радиоактивный элемент, изучается в научных целях.", image:"/static/img/table/at.png" },
            Rn: { name: "Радон", details: "Радиоактивный благородный газ, встречается в почве и представляет опасность для здоровья.", image:"/static/img/table/rn.png" },

            Fr: { name: "Франций", details: "Крайне радиоактивный щелочной металл, встречается в природе в следовых количествах.", image:"/static/img/table/fr.png" },
            Ra: { name: "Радий", details: "Радиоактивный элемент, ранее использовался в люминесцентной краске.", image:"/static/img/table/ra.png" },
            Rf: { name: "Резерфордий", details: "Синтетический элемент, используется только в научных целях.", image:"/static/img/table/rf.png" },
            Db: { name: "Дубний", details: "Искусственный элемент, назван в честь города Дубна, используется в исследованиях.", image:"/static/img/table/db.png" },
            Sg: { name: "Сиборгий", details: "Радиоактивный искусственный элемент, назван в честь Гленна Сиборга.", image:"/static/img/table/sg.png" },
            Bh: { name: "Борий", details: "Синтетический элемент, используется в ядерной физике.", image:"/static/img/table/bh.png" },
            Hs: { name: "Хассий", details: "Тяжёлый трансурановый элемент, используется в научных экспериментах.", image:"/static/img/table/hs.png" },
            Mt: { name: "Майтнерий", details: "Назван в честь Лизы Майтнер, используется в фундаментальных исследованиях.", image:"/static/img/table/mt.png" },
            Ds: { name: "Дармштадтий", details: "Синтетический элемент, назван в честь города Дармштадт.", image:"/static/img/table/ds.png" },
            Rg: { name: "Рентгений", details: "Назван в честь Вильгельма Рентгена, используется в ядерных исследованиях.", image:"/static/img/table/rg.png" },
            Cn: { name: "Коперниций", details: "Назван в честь Николая Коперника, радиоактивный и нестабильный.", image:"/static/img/table/cn.png" },
            Nh: { name: "Нихоний", details: "Назван японскими учёными, используется в научных исследованиях.", image:"/static/img/table/nh.png" },
            Fl: { name: "Флеровий", details: "Назван в честь Флерова, синтетический тяжёлый элемент.", image:"/static/img/table/fl.png" },
            Mc: { name: "Московий", details: "Назван в честь Московской области, используется в физике тяжёлых элементов.", image:"/static/img/table/mc.png" },
            Lv: { name: "Ливерморий", details: "Назван в честь Ливерморской национальной лаборатории.", image:"/static/img/table/lv.png" },
            Ts: { name: "Теннессин", details: "Назван в честь штата Теннесси, является радиоактивным элементом.", image:"/static/img/table/ts.png" },
            Og: { name: "Оганесон", details: "Назван в честь Юрия Оганесяна, предположительно инертный газ, но с необычными свойствами.", image:"/static/img/table/og.png" },
            
            La: { name: "Лантан", details: "Начало ряда лантаноидов, используется в оптике и в производстве стекла.", image:"/static/img/table/La2.jpg" },
            Ce: { name: "Церий", details: "Применяется в стекольной промышленности и в каталитических нейтрализаторах.", image:"/static/img/table/Ce2.jpg" },
            Pr: { name: "Празеодим", details: "Используется в магнитах, цветных стеклах и сплавах.", image:"/static/img/table/pr.jpg" },
            Nd: { name: "Неодим", details: "Широко используется в мощных постоянных магнитах.", image:"/static/img/table/nd.jpg" },
            Pm: { name: "Прометий", details: "Радиоактивный элемент, используется в источниках света и батареях космических аппаратов.", image:"/static/img/table/pm.png" },
            Sm: { name: "Самарий", details: "Применяется в магнитах, лазерах и ядерных реакторах.", image:"/static/img/table/sm.jpg" },
            Eu: { name: "Европий", details: "Используется в люминофорах для экранов и ламп.", image:"/static/img/table/Eu2.jpg" },
            Gd: { name: "Гадолиний", details: "Применяется в МРТ-контрастных веществах и ядерных реакторах.", image:"/static/img/table/Gd1.jpg" },
            Tb: { name: "Тербий", details: "Используется в люминофорах и магнитных охладителях.", image:"/static/img/table/tb.jpg" },
            Dy: { name: "Диспрозий", details: "Используется в магнитах и ядерной энергетике.", image:"/static/img/table/Dy1.jpg" },
            Ho: { name: "Гольмий", details: "Применяется в лазерных устройствах и ядерных реакторах.", image:"/static/img/table/Ho1.jpg" },
            Er: { name: "Эрбий", details: "Используется в оптоволоконной связи и лазерах.", image:"/static/img/table/er.jpg" },
            Tm: { name: "Тулий", details: "Редкий элемент, используется в лазерах и портативных рентгеновских аппаратах.", image:"/static/img/table/Tm1.jpg" },
            Yb: { name: "Иттербий", details: "Применяется в сплавах и лазерах, а также в геофизике.", image:"/static/img/table/Yb1.jpg" },
            Lu: { name: "Лютеций", details: "Последний элемент лантаноидов. Используется в катализаторах, люминофорах и в медицинских исследованиях.", image:"/static/img/table/Lu1.jpg" },
            
            Ac: { name: "Актиний", details: "Радиоактивный элемент, используется в источниках нейтронов.", image:"/static/img/table/ac.png" },
            Th: { name: "Торий", details: "Рассматривается как топливо для ядерных реакторов.", image:"/static/img/table/Th.jpg" },
            Pa: { name: "Протактиний", details: "Редкий радиоактивный элемент, в основном используется в научных исследованиях.", image:"/static/img/table/pa.png" },
            U: { name: "Уран", details: "Основное топливо для атомных электростанций, радиоактивен.", image:"/static/img/table/u.jpg" },
            Np: { name: "Нептуний", details: "Получается из урана, используется в исследованиях и в ядерной энергетике.", image:"/static/img/table/np.jpg" },
            Pu: { name: "Плутоний", details: "Используется в ядерном оружии и реакторах.", image:"/static/img/table/pu.jpg" },
            Am: { name: "Америций", details: "Применяется в ионизационных датчиках дыма.", image:"/static/img/table/am.jpg" },
            Cm: { name: "Кюрий", details: "Радиоактивный элемент, используется в научных исследованиях.", image:"/static/img/table/cm.jpg" },
            Bk: { name: "Берклий", details: "Применяется для получения более тяжёлых элементов.", image:"/static/img/table/bk.png" },
            Cf: { name: "Калифорний", details: "Используется как источник нейтронов в геофизических исследованиях.", image:"/static/img/table/cf.png" },
            Es: { name: "Эйнштейний", details: "Получен в результате ядерных испытаний, используется только в научных целях.", image:"/static/img/table/es.jpg" },
            Fm: { name: "Фермий", details: "Синтезирован при ядерных взрывах, применяется в научных исследованиях.", image:"/static/img/table/fm.png" },
            Md: { name: "Менделевий", details: "Назван в честь Менделеева, используется только в лабораторных условиях.", image:"/static/img/table/md.png" },
            No: { name: "Нобелий", details: "Искусственный элемент, используется исключительно в научных целях.", image:"/static/img/table/no.png" },
            Lr: { name: "Лоуренсий", details: "Трансурановый элемент из актиноидов. Используется в научных исследованиях, в частности, в ядерной физике.", image:"/static/img/table/lr.png" },

    };

        // Словарь для нестандартных имён файлов (на основе ваших логов)
    const specialImages = {
        'H': 'H.jpg', 'He': 'He.jpg', 'Li': 'Lit.jpg', 'Be': 'Be1.jpg',
        'B': 'B.jpg', 'C': 'С.jpg', 'N': 'N.jpg', 'O': 'O2.jpg',
        'F': 'F.png', 'Ne': 'Ne.jpg', 'Na': 'Na.jpg', 'Mg': 'Mg.jpg',
        'Al': 'Al3.jpg', 'Si': 'Si.jpg', 'P': 'P.png', 'S': 'S.jpg',
        'Cl': 'Cl1.jpg', 'Ar': 'Ar.jpg', 'K': 'K1.jpg', 'Ca': 'Ca2.jpg',
        'Sc': 'Sc1.jpg', 'Ti': 'Ti.jpg', 'V': 'V.jpg', 'Cr': 'Cr.jpg',
        'Mn': 'Mn2.jpg', 'Fe': 'Fe.jpg', 'Co': 'Co.jpg', 'Ni': 'Ni.jpg',
        'Cu': 'Cu3.jpg', 'Zn': 'Zn.jpg', 'Ga': 'Ga1.jpg', 'Ge': 'Ge.jpg',
        'As': 'As1.jpg', 'Se': 'Se.jpg', 'Br': 'Br.jpg', 'Kr': 'Kr.jpg',
        'Rb': 'Rb.jpg', 'Sr': 'Sr.jpg', 'Y': 'Y.jpg', 'Zr': 'Zr.jpg',
        'Nb': 'Nb.jpg', 'Mo': 'Mo.jpg', 'Tc': 'Tc1a.jpg', 'Ru': 'Ru3a.jpg',
        'Rh': 'Rh.jpg', 'Pd': 'Pd5a.jpg', 'Ag': 'Ag.jpg', 'Cd': 'Cd.jpg',
        'In': 'In2.jpg', 'Sn': 'Sn.jpg', 'Sb': 'Sb2a.jpg', 'Te': 'Te1.jpg',
        'I': 'I1.jpg', 'Xe': 'Xe.jpg', 'Cs': 'Cs.jpg', 'Ba': 'Ba1.jpg',
        'Hf': 'Hf3.jpg', 'Ta': 'Tantal.jpg', 'W': 'W.jpg', 'Re': 'Re.jpg',
        'Os': 'Os.jpg', 'Ir': 'Ir.jpg', 'Pt': 'Pt8a.jpg', 'Au': 'Au_crystals1.jpg',
        'Hg': 'Hg.jpg', 'Tl': 'Tl.jpg', 'Pb': 'pb.jpg', 'Bi': 'bi.jpg',
        'Po': 'po.png', 'At': 'at.png', 'Rn': 'rn.png', 'Fr': 'fr.png',
        'Ra': 'ra.png', 'Rf': 'rf.png', 'Db': 'db.png', 'Sg': 'sg.png',
        'Bh': 'bh.png', 'Hs': 'hs.png', 'Mt': 'mt.png', 'Ds': 'ds.png',
        'Rg': 'rg.png', 'Cn': 'cn.png', 'Nh': 'nh.png', 'Fl': 'fl.png',
        'Mc': 'mc.png', 'Lv': 'lv.png', 'Ts': 'ts.png', 'Og': 'og.png',
        'La': 'La2.jpg', 'Ce': 'Ce2.jpg', 'Pr': 'pr.jpg', 'Nd': 'nd.jpg',
        'Pm': 'pm.png', 'Sm': 'sm.jpg', 'Eu': 'Eu2.jpg', 'Gd': 'Gd1.jpg',
        'Tb': 'tb.jpg', 'Dy': 'Dy1.jpg', 'Ho': 'Ho1.jpg', 'Er': 'er.jpg',
        'Tm': 'Tm1.jpg', 'Yb': 'Yb1.jpg', 'Lu': 'Lu1.jpg', 'Ac': 'ac.png',
        'Th': 'Th.jpg', 'Pa': 'pa.png', 'U': 'u.jpg', 'Np': 'np.jpg',
        'Pu': 'pu.jpg', 'Am': 'am.jpg', 'Cm': 'cm.jpg', 'Bk': 'bk.png',
        'Cf': 'cf.png', 'Es': 'es.jpg', 'Fm': 'fm.png', 'Md': 'md.png',
        'No': 'no.png', 'Lr': 'lr.png'
    };

    for (let sym in elementsData) {
        if (!elementsData[sym].image) {
            let filename = specialImages[sym] ? specialImages[sym] : `${sym}.jpg`;
            elementsData[sym].image = `/static/img/table/${filename}`;
        }
    }

window.showElementInfo = function (symbol) {
    const element = elementsData[symbol];
    const title = document.getElementById('element-title');
    const details = document.getElementById('element-details');
    const image = document.getElementById('element-image');
    const infoCard = document.getElementById('element-info');
    const overlay = document.getElementById('modal-overlay');

    if (element) {
        title.textContent = element.name + " (" + symbol + ")";
        details.textContent = element.details;

        // Показываем картинку, если она есть
        if (element.image) {
            image.src = element.image;
            image.alt = element.name;
            image.style.display = "block";
        } else {
            image.style.display = "none";
        }
    } else {
        title.textContent = "Информация не найдена";
        details.textContent = "Для элемента " + symbol + " нет доступной информации.";
        image.style.display = "none";
    }

    overlay.style.display = "block";
    infoCard.style.display = "block";
};

window.hideElementInfo = function () {
    document.getElementById("element-info").style.display = "none";
    document.getElementById("modal-overlay").style.display = "none";
};
    
    

    // Словарь групп с элементами (пример, заполните нужными символами)
    const groups = {
        metals: [
          'Li', 'Be', 'Na', 'Mg', 'Al', 'K', 'Ca', 'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn',
          'Ga', 'Rb', 'Sr', 'Y', 'Zr', 'Nb', 'Mo', 'Tc', 'Ru', 'Rh', 'Pd', 'Ag', 'Cd', 'In', 'Sn', 'Cs',
          'Ba', 'La', 'Ce', 'Pr', 'Nd', 'Pm', 'Sm', 'Eu', 'Gd', 'Tb', 'Dy', 'Ho', 'Er', 'Tm', 'Yb', 'Lu',
          'Hf', 'Ta', 'W', 'Re', 'Os', 'Ir', 'Pt', 'Au', 'Hg', 'Tl', 'Pb', 'Bi', 'Po', 'Fr', 'Ra', 'Ac',
          'Th', 'Pa', 'U', 'Np', 'Pu', 'Am', 'Cm', 'Bk', 'Cf', 'Es', 'Fm', 'Md', 'No', 'Lr'
        ],
        
        alkali: ['Li', 'Na', 'K', 'Rb', 'Cs', 'Fr'],
      
        alkalineEarth: ['Be', 'Mg', 'Ca', 'Sr', 'Ba', 'Ra'],
      
        lanthanides: ['La', 'Ce', 'Pr', 'Nd', 'Pm', 'Sm', 'Eu', 'Gd', 'Tb', 'Dy', 'Ho', 'Er', 'Tm', 'Yb', 'Lu'],
      
        actinides: ['Ac', 'Th', 'Pa', 'U', 'Np', 'Pu', 'Am', 'Cm', 'Bk', 'Cf', 'Es', 'Fm', 'Md', 'No', 'Lr'],
      
        transition: [
          'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn',
          'Y', 'Zr', 'Nb', 'Mo', 'Tc', 'Ru', 'Rh', 'Pd', 'Ag', 'Cd',
          'Hf', 'Ta', 'W', 'Re', 'Os', 'Ir', 'Pt', 'Au', 'Hg',
          'Rf', 'Db', 'Sg', 'Bh', 'Hs', 'Mt', 'Ds', 'Rg', 'Cn'
        ],
      
        postTransition: ['Al', 'Ga', 'In', 'Sn', 'Tl', 'Pb', 'Bi', 'Po'],
      
        semimetals: ['B', 'Si', 'Ge', 'As', 'Sb', 'Te', 'Po'],
      
        nonmetals: ['H', 'C', 'N', 'O', 'F', 'P', 'S', 'Cl'],
      
        nobleGases: ['He', 'Ne', 'Ar', 'Kr', 'Xe', 'Rn', 'Og']
      };
      
  
  function clearHighlights() {
    document.querySelectorAll('.element').forEach(el => {
        el.classList.remove(
            'highlight-metals', 'highlight-semimetals', 'highlight-nonmetals',
            'highlight-alkali', 'highlight-alkalineEarth', 'highlight-lanthanides',
            'highlight-actinides', 'highlight-transition', 'highlight-postTransition',
            'highlight-nobleGases'
        );
    });
}

window.highlightGroup = function(group) {
    clearHighlights();

    if (groups[group]) {
        groups[group].forEach(sym => {
            const el = document.querySelector(`.element[data-symbol="${sym}"]`);
            if (el) el.classList.add(`highlight-${group}`);
        });
    }
};


  
  




let beakers = [];
let history = [];

function addBeaker() {
    if (beakers.length >= 3) return;

    let table = document.getElementById("table");
    let beaker = document.createElement("div");
    beaker.classList.add("beaker");
    beaker.setAttribute("draggable", "true");
    beaker.setAttribute("ondragstart", "dragBeaker(event)");
    beaker.setAttribute("ondrop", "dropBeaker(event)");
    beaker.setAttribute("ondragover", "allowDrop(event)");

    let liquid = document.createElement("div");
    liquid.classList.add("liquid");
    beaker.appendChild(liquid);

    table.appendChild(beaker);
    beakers.push(beaker);

    updateBeakerPositions();
    history.push({ action: "addBeaker", beaker });
}

function updateBeakerPositions() {
    let positions = ["center", "left", "right"];
    beakers.forEach((b, i) => b.classList.add(positions[i]));
}

function openChemicalMenu() {
    document.getElementById("chemical-menu").classList.remove("hidden");
}

function closeChemicalMenu() {
    document.getElementById("chemical-menu").classList.add("hidden");
}

function drag(event, substance, color) {
    event.dataTransfer.setData("substance", substance);
    event.dataTransfer.setData("color", color);
}

function dragBeaker(event) {
    event.dataTransfer.setData("beakerIndex", beakers.indexOf(event.target));
}

function allowDrop(event) {
    event.preventDefault();
}



function drop(event, beaker) {
    event.preventDefault();
    let substance = event.dataTransfer.getData("substance");
    let color = event.dataTransfer.getData("color");

    if (substance) {
        let liquid = beaker.querySelector(".liquid");
        if (!liquid.dataset.substance) {
            liquid.dataset.substance = substance;
            liquid.style.backgroundColor = color;
            liquid.style.height = "100%";
        } else {
            let newColor = mixLiquids(liquid.dataset.substance, substance);
            liquid.dataset.substance = newColor.substance;
            liquid.style.backgroundColor = newColor.color;
        }
    }
}

function dropBeaker(event) {
    event.preventDefault();
    let fromIndex = event.dataTransfer.getData("beakerIndex");
    let fromBeaker = beakers[fromIndex];
    let toBeaker = event.target.closest(".beaker");

    if (fromBeaker && toBeaker && fromBeaker !== toBeaker) {
        let fromLiquid = fromBeaker.querySelector(".liquid");
        let toLiquid = toBeaker.querySelector(".liquid");

        if (fromLiquid.dataset.substance) {
            let newColor = mixLiquids(toLiquid.dataset.substance, fromLiquid.dataset.substance);
            toLiquid.dataset.substance = newColor.substance;
            toLiquid.style.backgroundColor = newColor.color;
            toLiquid.style.height = "100%";

            fromLiquid.style.backgroundColor = "transparent";
            fromLiquid.style.height = "0%";
            delete fromLiquid.dataset.substance;
        }
    }
}

function mixLiquids(substance1, substance2) {
    if ((substance1 === "HCl" && substance2 === "NH3") || (substance1 === "NH3" && substance2 === "HCl")) {
        return { substance: "NH4Cl", color: "purple" };
    }
    return { substance: substance2, color: substance2 === "HCl" ? "red" : "blue" };
}

function undoLastAction() {
    if (history.length === 0) return;
    let lastAction = history.pop();

    if (lastAction.action === "addBeaker") {
        lastAction.beaker.remove();
        beakers.pop();
    }
}

function clearWorkspace() {
    document.getElementById("table").innerHTML = "";
    beakers = [];
    history = [];
}


