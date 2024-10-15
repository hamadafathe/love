document.getElementById("messageButton").addEventListener("click", function() {
    const startDateInput = document.getElementById("startDate").value;
    const durationInput = document.getElementById("duration").value;
    const messageElement = document.getElementById("hiddenMessage");

    // التاريخ المتوقع وعدد الأيام المتوقع
    const expectedDate = "2024-09-24";
    const expectedDuration = 20;

    if (startDateInput && durationInput) {
        const startDate = new Date(startDateInput);
        const today = new Date();
        
        // حساب الفرق بالأيام
        const timeDifference = today - startDate;
        const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24)); // تحويل الفرق من ميلي ثانية إلى أيام

        if (startDateInput === expectedDate && parseInt(durationInput) === expectedDuration) {
            const message = `لقد بدأنا علاقتنا في ${startDateInput} ومنذ ذلك الحين مضى ${durationInput}يومًاحب عمري و حب سنيني  انا بحبك و بعشقك فوق مما تتخيلي والله و مكانك عندي عالي و غالي اوي يابنتي والله انتي من ساعه ما جيتي حياتي يا روان وانتي غيرتي حاجات كتير اوي خلتيني احب حياتي في وجودك و دايما شايف ان انتي وحدك في حياتي كفايه مهما قولت مش هقدر اوصفك من جمال و احترام وتقديرك ليا انا بجد انا مش عايز الموضوع ينتهي و مش عايز طريقنا يوقف انا لسه في كتير ياما هعملو ليكي ولسه عايز اقدملك كل خير يروحي و خدي بالك انتي مطلعتيش من بالي ولا ثانيه كنتي دايما في بالي و يا نن عيون حماده ربنا يخليكي ليا و يحفظك ليا يا نن عيوني و ميحرمنيش منك ابدا وهفضل احبك لحد اخر يوم في عمري يروحي والله   💗💗💗💗💗 
💗💗💗💗💗💗💗💗💗💗
انا بكتب الرساله دي بكل حب و صدق و الله ربنا هو اللي واحده يعلم انا لاقيت القصيده دي معبره اوي عن اللي جوايا 
لسان الهوى في مهجتي لك ناطقٌ يخبّر عني أنني لـك عـاشـقٌ  وقلبي جريحٌ من فراقك خافـق وكم أكتم الحب الذي قد أذابـنـي فجفني قريح والدموع سـوابـق. أرى آثارهم فأذوب شـوقـاً وأسكب في مواطنهم دموعي وأسأل من بفرقتهم بـلانـي 
قالوا جُننت بمن تهوى فقلت لهم ما لذّة العيش إلا للمـجـانـين هاتوا جنوني وهاتوا من جُنِنتُ به فإنّي وفيُّ بجنوني لا تلومونـي. وحياة وجهك لا أحب سواكا حتى أموت ولا أخون هواكا يا بدر تم بالجميل مبرقـعـاً كل المِلاح تسير تحت لواكا أنت الذي فقت الملاح لطافة والله رب العالمين حبـاكـا.
عبرت بنسبه 70% عن اللي حسه ليكي بس ماشي كنت عايز اقول بس انك الوحيده اللي حبيتها بجد واللي قبلك سيكي ميكي انتي اللي استحمليني وانا وحش الصراحه انا مش كدا كنت في أغلب الأوقات قاصد ابقا وحش عشان اشوف انتي هيتسحملي ولا لا بس المرات اللي عيطتي فيها والله كانت متعصب فعلا أناا اسف والله بس كان لازم اعمل معاكي كدا عشان اتأكد من حبك ليا وتأكدت خلاص و عمري ما هزعلك تاني و هىضيكي علي طول و هكون معاكي و في ضهرك ع طول عمري ما هسيبك انا بحبك اوي اوي والله لغايه بكره اقسم بالله ربنا يشهد علي كل كلمه انا مش بحبك انا بعشقك و متيم بيكي درجات الحب اقلها الاعجاب اوسطها الحب أعلها العشق و التيمم ربنا يخليكي ليا و يحفظك و يبارك فيكي و تكون من نصيببي انا بدعي بكدا كل يوم أن شاء الله ربنا يستجب دعائي انا مليش غيرك و محبتش غيرك والله
💗💗💗💗💗💗💗💗💗💗24sep (always remind !`;
            messageElement.innerText = message;
            messageElement.style.display = "block";
        } else {
            alert("ركزي يا وليه");
        }
    } else {
        alert("يرجى إدخال تاريخ بدء العلاقة ومدة العلاقة.");
    }
});
document.getElementById("messageButton").addEventListener("click", function() {
    const startDateInput = document.getElementById("startDate").value;
    const durationInput = document.getElementById("duration").value;
    const messageElement = document.getElementById("hiddenMessage");

    // التاريخ المتوقع وعدد الأيام المتوقع
    const expectedDate = "2024-09-24";
    const expectedDuration = 17;

    if (startDateInput && durationInput) {
        const startDate = new Date(startDateInput);
        const today = new Date();
        
        // حساب الفرق بالأيام
        const timeDifference = today - startDate;
        const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24)); // تحويل الفرق من ميلي ثانية إلى أيام

        if (startDateInput === expectedDate && parseInt(durationInput) === expectedDuration) {
            const message = `لقد بدأنا علاقتنا في ${startDateInput} ومنذ ذلك الحين مضى ${durationInput} يومًا. أنت في قلبي دائمًاعايزك تكوني عارفه ان بحب هزارك و ضحكتك .بموت فيكي والله انتي حياتي انتي عمري انتي نجمه جايه من السما و وقعت جوا قلبي بحب اقضي وقتي معاكي انتي واخده كل وقتي وكل تفكيري و مش هحب حد قدك ولا هحب بعدك انتي جنتي الحلوه اللي بهرب من العالم كله معاها عشان ابقي معاكي و بس ربنا يخليكي ليا و ميحرمنيش منك ابدااا يروح قلبي عارف اني ساعات بزعلك بس والله غصب عني مش عايزك تزعلي مني ابدا بتمني دايما من ربنا انك تكوني لياانا بحبك لان اول مره قلبي يدق مع حد كنت انتي الد دا بحبك عشان انتي حبيبتي و مراتي و بنتي بحبك ونفسي نفضل مع بعض ع طول بحبك عشان مينفعش يعدي اليوم من غير ما اكلمك انا بموت فيكي يا حبي عمري ربنا يديمك نعمه في حياتي يا قلبي!`;
            messageElement.innerText = message;
            messageElement.style.display = "block";
        } else {
            alert("ركزي يا وليه");
        }
    } else {
        alert("يرجى إدخال تاريخ بدء العلاقة ومدة العلاقة.");
    }
});
