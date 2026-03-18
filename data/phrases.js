const PHRASES_DATA = {
  categories: [
    {
      id: "airport",
      icon: "✈️",
      title: "Аэропорт",
      subtitle: "Airport",
      color: "#0071e3",
      phrases: [
        { en: "Where is the check-in counter?", ru: "Где стойка регистрации?" },
        { en: "I'd like a window seat, please.", ru: "Мне бы хотелось место у окна, пожалуйста." },
        { en: "I'd like an aisle seat, please.", ru: "Мне бы хотелось место у прохода, пожалуйста." },
        { en: "How many bags can I check in?", ru: "Сколько сумок я могу сдать в багаж?" },
        { en: "My luggage is overweight.", ru: "Мой багаж перевешивает." },
        { en: "Where is gate number...?", ru: "Где выход номер...?" },
        { en: "When does boarding start?", ru: "Когда начинается посадка?" },
        { en: "Is the flight on time?", ru: "Рейс по расписанию?" },
        { en: "The flight is delayed.", ru: "Рейс задерживается." },
        { en: "My flight has been cancelled.", ru: "Мой рейс отменили." },
        { en: "Where is the baggage claim?", ru: "Где получение багажа?" },
        { en: "My luggage is lost.", ru: "Мой багаж потерян." },
        { en: "I need to fill out a customs form.", ru: "Мне нужно заполнить таможенную декларацию." },
        { en: "Do you have anything to declare?", ru: "Вам есть что декларировать?" },
        { en: "I have nothing to declare.", ru: "Мне нечего декларировать." },
        { en: "Where is passport control?", ru: "Где паспортный контроль?" },
        { en: "What is the purpose of your visit?", ru: "Цель вашего визита?" },
        { en: "I'm here on vacation.", ru: "Я здесь в отпуске." },
        { en: "I'm here on business.", ru: "Я здесь по делам." },
        { en: "How long will you be staying?", ru: "Как долго вы пробудете?" },
        { en: "I'll be staying for a week.", ru: "Я пробуду неделю." },
        { en: "Where is the currency exchange?", ru: "Где обмен валюты?" },
        { en: "Where are the toilets?", ru: "Где туалеты?" },
        { en: "Is there free Wi-Fi here?", ru: "Здесь есть бесплатный Wi-Fi?" },
        { en: "Where can I find a taxi?", ru: "Где я могу найти такси?" },
      ]
    },
    {
      id: "flight",
      icon: "🛫",
      title: "На борту",
      subtitle: "On the Plane",
      color: "#5856d6",
      phrases: [
        { en: "Excuse me, that's my seat.", ru: "Простите, это моё место." },
        { en: "Can you help me with my carry-on?", ru: "Не могли бы вы помочь мне с ручной кладью?" },
        { en: "Please fasten your seatbelt.", ru: "Пожалуйста, пристегните ремень безопасности." },
        { en: "Could I have a blanket, please?", ru: "Можно мне плед, пожалуйста?" },
        { en: "Could I have a pillow, please?", ru: "Можно мне подушку, пожалуйста?" },
        { en: "I'm feeling airsick.", ru: "Меня укачивает в самолёте." },
        { en: "Could I have some water, please?", ru: "Можно мне воды, пожалуйста?" },
        { en: "What would you like to drink?", ru: "Что вы хотите выпить?" },
        { en: "What are the meal options?", ru: "Какие варианты питания?" },
        { en: "I have a dietary restriction.", ru: "У меня ограничения в питании." },
        { en: "I'm vegetarian.", ru: "Я вегетарианец/вегетарианка." },
        { en: "I'm allergic to nuts.", ru: "У меня аллергия на орехи." },
        { en: "Could you recline your seat?", ru: "Не могли бы вы поднять спинку сиденья?" },
        { en: "Could you lower the window shade?", ru: "Не могли бы вы опустить шторку иллюминатора?" },
        { en: "How much longer until we land?", ru: "Сколько ещё до посадки?" },
        { en: "When do we arrive?", ru: "Когда мы прибываем?" },
        { en: "What is the local time?", ru: "Какое местное время?" },
        { en: "The seatbelt sign is on.", ru: "Знак пристегнуть ремни включён." },
        { en: "We are experiencing turbulence.", ru: "Мы испытываем турбулентность." },
        { en: "Please remain seated.", ru: "Пожалуйста, оставайтесь на своих местах." },
        { en: "We are beginning our descent.", ru: "Мы начинаем снижение." },
        { en: "Is there a charging port nearby?", ru: "Есть ли поблизости порт для зарядки?" },
        { en: "Do you have headphones?", ru: "У вас есть наушники?" },
        { en: "Excuse me, I need to get past.", ru: "Простите, мне нужно пройти." },
      ]
    },
    {
      id: "transfer",
      icon: "🚌",
      title: "Трансфер",
      subtitle: "Transfer & Transport",
      color: "#ff9500",
      phrases: [
        { en: "Where is the shuttle bus stop?", ru: "Где остановка шаттла?" },
        { en: "How do I get to the city centre?", ru: "Как добраться до центра города?" },
        { en: "Is there a direct bus to the hotel?", ru: "Есть ли прямой автобус до отеля?" },
        { en: "How long does it take?", ru: "Сколько времени это займёт?" },
        { en: "Take me to this address, please.", ru: "Отвезите меня по этому адресу, пожалуйста." },
        { en: "Please take me to the hotel.", ru: "Пожалуйста, отвезите меня в отель." },
        { en: "How much does it cost?", ru: "Сколько это стоит?" },
        { en: "Is it far from here?", ru: "Это далеко отсюда?" },
        { en: "Can you drive faster, please?", ru: "Не могли бы вы ехать быстрее, пожалуйста?" },
        { en: "Please stop here.", ru: "Пожалуйста, остановитесь здесь." },
        { en: "Keep the change.", ru: "Сдачи не нужно." },
        { en: "Can I get a receipt?", ru: "Можно получить квитанцию?" },
        { en: "Where is the nearest metro station?", ru: "Где ближайшая станция метро?" },
        { en: "Which train goes to the airport?", ru: "Какой поезд идёт в аэропорт?" },
        { en: "Can I buy a ticket here?", ru: "Могу я купить билет здесь?" },
        { en: "Where should I get off?", ru: "Где мне выходить?" },
        { en: "Is this the right stop?", ru: "Это нужная остановка?" },
        { en: "Could you call me a taxi?", ru: "Не могли бы вы вызвать мне такси?" },
        { en: "I have a reservation with the transfer service.", ru: "У меня есть бронь трансфера." },
        { en: "Can you put my bags in the trunk?", ru: "Не могли бы вы положить мои сумки в багажник?" },
      ]
    },
    {
      id: "hotel",
      icon: "🏨",
      title: "Отель",
      subtitle: "Hotel",
      color: "#34c759",
      phrases: [
        { en: "I have a reservation.", ru: "У меня есть бронь." },
        { en: "My name is...", ru: "Меня зовут..." },
        { en: "I'd like to check in.", ru: "Я хочу зарегистрироваться." },
        { en: "I'd like to check out.", ru: "Я хочу выехать." },
        { en: "What time is check-in?", ru: "Во сколько заезд?" },
        { en: "What time is check-out?", ru: "Во сколько выезд?" },
        { en: "Can I have an early check-in?", ru: "Могу ли я заехать пораньше?" },
        { en: "Can I have a late check-out?", ru: "Могу ли я выехать позже?" },
        { en: "Could I have a room with a view?", ru: "Не могли бы вы дать мне номер с видом?" },
        { en: "Could I have a quieter room?", ru: "Не могли бы вы дать мне более тихий номер?" },
        { en: "The room is too noisy.", ru: "В номере слишком шумно." },
        { en: "The air conditioning is not working.", ru: "Кондиционер не работает." },
        { en: "The Wi-Fi is not working.", ru: "Wi-Fi не работает." },
        { en: "Could you bring extra towels?", ru: "Не могли бы вы принести дополнительные полотенца?" },
        { en: "Could you bring extra pillows?", ru: "Не могли бы вы принести дополнительные подушки?" },
        { en: "I'd like a wake-up call at 7 AM.", ru: "Разбудите меня в 7 утра, пожалуйста." },
        { en: "Where is the restaurant?", ru: "Где ресторан?" },
        { en: "Is breakfast included?", ru: "Включён ли завтрак?" },
        { en: "What time is breakfast?", ru: "Во сколько завтрак?" },
        { en: "Could I have my bill, please?", ru: "Можно мне счёт, пожалуйста?" },
        { en: "Can I pay by credit card?", ru: "Могу я заплатить кредитной картой?" },
        { en: "I'd like to store my luggage.", ru: "Я хотел бы оставить багаж на хранение." },
        { en: "Where is the gym?", ru: "Где спортзал?" },
        { en: "Where is the swimming pool?", ru: "Где бассейн?" },
        { en: "Do you have room service?", ru: "У вас есть обслуживание в номерах?" },
      ]
    },
    {
      id: "emergency",
      icon: "🆘",
      title: "Экстренные",
      subtitle: "Emergency",
      color: "#ff3b30",
      phrases: [
        { en: "Help!", ru: "Помогите!" },
        { en: "Call the police!", ru: "Вызовите полицию!" },
        { en: "Call an ambulance!", ru: "Вызовите скорую помощь!" },
        { en: "I need a doctor.", ru: "Мне нужен врач." },
        { en: "I've been robbed.", ru: "Меня ограбили." },
        { en: "My passport has been stolen.", ru: "У меня украли паспорт." },
        { en: "I've lost my wallet.", ru: "Я потерял/потеряла кошелёк." },
        { en: "I'm not feeling well.", ru: "Мне плохо." },
        { en: "I have a fever.", ru: "У меня жар." },
        { en: "I need medicine.", ru: "Мне нужно лекарство." },
        { en: "Where is the nearest hospital?", ru: "Где ближайшая больница?" },
        { en: "Where is the nearest pharmacy?", ru: "Где ближайшая аптека?" },
        { en: "I have travel insurance.", ru: "У меня есть туристическая страховка." },
        { en: "I've missed my flight.", ru: "Я опоздал/опоздала на рейс." },
        { en: "I need to contact my embassy.", ru: "Мне нужно связаться с посольством." },
        { en: "Please call the emergency number.", ru: "Пожалуйста, позвоните по номеру экстренной службы." },
        { en: "I am allergic to...", ru: "У меня аллергия на..." },
        { en: "I am diabetic.", ru: "Я диабетик." },
      ]
    },
    {
      id: "general",
      icon: "💬",
      title: "Основные",
      subtitle: "General Phrases",
      color: "#af52de",
      phrases: [
        { en: "Hello!", ru: "Здравствуйте! / Привет!" },
        { en: "Good morning.", ru: "Доброе утро." },
        { en: "Good afternoon.", ru: "Добрый день." },
        { en: "Good evening.", ru: "Добрый вечер." },
        { en: "Goodbye.", ru: "До свидания." },
        { en: "Thank you.", ru: "Спасибо." },
        { en: "Thank you very much.", ru: "Большое спасибо." },
        { en: "You're welcome.", ru: "Пожалуйста." },
        { en: "Excuse me.", ru: "Простите / Извините." },
        { en: "I'm sorry.", ru: "Мне жаль." },
        { en: "Please.", ru: "Пожалуйста." },
        { en: "Yes.", ru: "Да." },
        { en: "No.", ru: "Нет." },
        { en: "I don't understand.", ru: "Я не понимаю." },
        { en: "Could you speak more slowly?", ru: "Не могли бы вы говорить медленнее?" },
        { en: "Could you repeat that?", ru: "Не могли бы вы повторить?" },
        { en: "Do you speak Russian?", ru: "Вы говорите по-русски?" },
        { en: "I don't speak English well.", ru: "Я плохо говорю по-английски." },
        { en: "Where is...?", ru: "Где находится...?" },
        { en: "How much does this cost?", ru: "Сколько это стоит?" },
        { en: "Can you help me?", ru: "Не могли бы вы мне помочь?" },
        { en: "I'm lost.", ru: "Я заблудился/заблудилась." },
        { en: "Do you have a map?", ru: "У вас есть карта?" },
        { en: "Can I take a photo here?", ru: "Можно ли здесь фотографировать?" },
        { en: "Is it free?", ru: "Это бесплатно?" },
      ]
    }
  ]
};

const GUIDES_DATA = {
  guides: [
    {
      id: "checkin",
      icon: "🎫",
      title: "Регистрация на рейс",
      subtitle: "Check-in Process",
      color: "#0071e3",
      steps: [
        {
          title: "Онлайн-регистрация",
          content: "Зарегистрируйтесь онлайн за 24–48 часов до вылета. Скачайте посадочный талон на телефон или распечатайте. Это сэкономит время в аэропорту.",
          tip: "Online check-in is usually available 24–48 hours before departure"
        },
        {
          title: "В аэропорту",
          content: "Приезжайте минимум за 2 часа до вылета (за 3 часа для международных рейсов). Найдите стойку регистрации вашей авиакомпании по табло вылетов.",
          tip: "Arrive at least 2 hours early for domestic, 3 hours for international flights"
        },
        {
          title: "Сдача багажа",
          content: "Взвесьте багаж заранее. Если вес превышен, придётся доплатить. Прикрепите бирку с вашим именем и контактами к каждой сумке.",
          tip: "Tag your bags with your name and contact information"
        },
        {
          title: "Паспортный контроль",
          content: "Приготовьте паспорт и посадочный талон. Отвечайте на вопросы чётко и уверенно. Не шутите о безопасности — это серьёзное нарушение.",
          tip: "Never joke about security — it's taken very seriously"
        },
        {
          title: "Досмотр безопасности",
          content: "Снимите ремень, часы, ноутбук достаньте из сумки. Жидкости (до 100 мл) поместите в прозрачный пакет. Следуйте указаниям сотрудников безопасности.",
          tip: "Liquids must be under 100ml and in a clear bag"
        },
        {
          title: "Выход на посадку",
          content: "Ищите номер выхода на посадочном талоне. Приходите к выходу минимум за 30 минут. Выходы могут меняться — следите за объявлениями.",
          tip: "Gates can change — always check the departure boards"
        }
      ]
    },
    {
      id: "customs",
      icon: "🛃",
      title: "Таможня и пограничный контроль",
      subtitle: "Customs & Immigration",
      color: "#5856d6",
      steps: [
        {
          title: "Заполнение декларации",
          content: "На борту самолёта вам могут дать таможенную декларацию. Заполните её заранее. Укажите всё, что везёте в страну: наличные свыше $10 000, продукты питания, коммерческие товары.",
          tip: "Always declare — it's better to declare and not need to than vice versa"
        },
        {
          title: "Пограничный контроль",
          content: "Встаньте в очередь граждан или иностранцев согласно вашему паспорту. Приготовьте паспорт, визу (если нужна) и заполненную декларацию.",
          tip: "Have your documents ready before you reach the officer"
        },
        {
          title: "Типичные вопросы офицера",
          content: "Будьте готовы ответить: цель поездки, где остановитесь, сколько времени пробудете. Отвечайте честно и конкретно. Не проявляйте нервозность.",
          tip: "Answer concisely: purpose of visit, accommodation, length of stay"
        },
        {
          title: "Зелёный / Красный коридор",
          content: "Зелёный коридор — если вам нечего декларировать. Красный — если есть что декларировать. Выбор неправильного коридора при наличии товаров для декларирования является нарушением.",
          tip: "Green = nothing to declare, Red = items to declare"
        },
        {
          title: "Досмотр багажа",
          content: "Таможенники могут попросить открыть чемодан. Спокойно выполняйте все просьбы. Если вы везёте лекарства, держите рецепты при себе.",
          tip: "Keep prescription medications with their labels and prescriptions"
        }
      ]
    },
    {
      id: "plane_behavior",
      icon: "🛩️",
      title: "Поведение на борту",
      subtitle: "On the Plane",
      color: "#ff9500",
      steps: [
        {
          title: "Посадка",
          content: "Садитесь на своё место и быстро разложите вещи, чтобы не задерживать других пассажиров. Ручную кладь кладите в верхний отсек строго над своим местом.",
          tip: "Store your carry-on in the overhead bin above your seat"
        },
        {
          title: "Безопасность",
          content: "Всегда слушайте инструктаж по безопасности, даже если летаете часто. Пристегните ремень, как только сядете. Держите ремень пристёгнутым во время полёта.",
          tip: "Keep your seatbelt fastened whenever seated, even when the sign is off"
        },
        {
          title: "Этикет на борту",
          content: "Не откидывайте спинку во время еды соседа сзади. Спрашивайте разрешения перед откидыванием. Не ставьте ноги на сиденье спереди. Говорите тихо.",
          tip: "Ask permission before reclining your seat during mealtime"
        },
        {
          title: "Питание и напитки",
          content: "Стюардесса/стюард раздадут напитки и еду. Можно попросить дополнительно воду. Не забудьте поставить столик обратно и убрать мусор перед посадкой.",
          tip: "You can always ask for extra water — stay hydrated on flights"
        },
        {
          title: "Режим полёта",
          content: "Переведите телефон в режим полёта сразу после посадки. Ноутбук и планшет можно использовать после набора высоты. Наушники используйте с уважением к соседям.",
          tip: "Switch to airplane mode before doors close — not just before takeoff"
        },
        {
          title: "Длинные перелёты",
          content: "Вставайте каждые 1–2 часа для предотвращения тромбоза. Пейте воду, избегайте алкоголя. Возьмите беруши, маску для сна и плед для комфорта.",
          tip: "Walk the aisle every 1–2 hours on long flights to prevent DVT"
        }
      ]
    },
    {
      id: "hotel_tips",
      icon: "🏨",
      title: "Заезд и жизнь в отеле",
      subtitle: "Hotel Tips",
      color: "#34c759",
      steps: [
        {
          title: "Заезд (Check-in)",
          content: "Стандартное время заезда — 14:00–15:00. Если вы приехали раньше, попросите ранний заезд (могут быть доплаты). Попросите карту отеля и узнайте, где находятся ресторан и другие удобства.",
          tip: "Ask for a map of the hotel and a list of amenities at check-in"
        },
        {
          title: "Номер",
          content: "Осмотрите номер при заезде. Если что-то не так (шум, запах, неработающее оборудование) — сразу сообщите на ресепшн. Вас должны переселить или устранить проблему.",
          tip: "Inspect your room immediately and report any issues right away"
        },
        {
          title: "Безопасность в отеле",
          content: "Никогда не открывайте дверь незнакомцам. Используйте сейф для документов, денег и ценностей. Запомните расположение пожарных выходов при заезде.",
          tip: "Use the in-room safe for your passport and valuables"
        },
        {
          title: "Уборка и сервис",
          content: "Вывешивайте знак «Не беспокоить» (Do Not Disturb), если не нужна уборка. Для уборки используйте знак «Уберите номер» (Please Make Up Room). Оставьте чаевые горничной (1–3 USD в день).",
          tip: "Leave a small tip for housekeeping — $1–3 per night is standard"
        },
        {
          title: "Ресторан и завтрак",
          content: "Уточните время завтрака при заезде. Если завтрак включён — не пропускайте его. При заказе в ресторане убедитесь, входит ли блюдо в пакет или оплачивается отдельно.",
          tip: "Confirm breakfast hours and what is included in your room rate"
        },
        {
          title: "Выезд (Check-out)",
          content: "Освободите номер до указанного времени (обычно 11:00–12:00). Сдайте ключ-карту. Проверьте мини-бар — незапланированное использование будет включено в счёт. Попросите детальный счёт.",
          tip: "Review your bill carefully before checking out — request an itemized bill"
        }
      ]
    },
    {
      id: "transfer_tips",
      icon: "🚕",
      title: "Трансфер и такси",
      subtitle: "Getting Around",
      color: "#ff3b30",
      steps: [
        {
          title: "Официальное такси vs нелегальные водители",
          content: "Всегда берите официальные такси или используйте приложения (Uber, Bolt, Yandex). Избегайте «частников», предлагающих такси у выхода из аэропорта — часто это мошенники.",
          tip: "Only use official taxi ranks or licensed apps like Uber or Bolt"
        },
        {
          title: "Предзаказ трансфера",
          content: "Лучше всего заказать трансфер заранее через отель или онлайн-сервис. Водитель будет вас встречать с табличкой. Уточните итоговую стоимость до поездки.",
          tip: "Pre-book airport transfers to avoid stress on arrival"
        },
        {
          title: "В такси",
          content: "Перед посадкой уточните стоимость или убедитесь, что счётчик включён. Покажите адрес назначения на телефоне — это избегает языкового барьера. Держите чемоданы при себе.",
          tip: "Show your destination address on your phone to avoid miscommunication"
        },
        {
          title: "Общественный транспорт",
          content: "Во многих аэропортах есть экспресс-поезда в центр города. Это дешевле и надёжнее. Купите проездной на нужное количество поездок, если планируете активно использовать транспорт.",
          tip: "Airport express trains are usually the fastest and cheapest option"
        },
        {
          title: "Навигация",
          content: "Скачайте карты офлайн в Google Maps или Maps.me перед поездкой. Включите передачу геолокации. Это поможет даже без интернета найти дорогу.",
          tip: "Download offline maps before your trip — they work without internet"
        }
      ]
    },
    {
      id: "delays",
      icon: "⏳",
      title: "Задержки и отмены рейсов",
      subtitle: "Flight Delays & Cancellations",
      color: "#af52de",
      steps: [
        {
          title: "Задержка рейса",
          content: "Если рейс задержан — обратитесь к стойке авиакомпании. При задержке свыше 2 часов у вас есть право на питание за счёт авиакомпании. Свыше 5 часов — право на возврат средств или альтернативный рейс.",
          tip: "EU regulation EC 261/2004 protects your rights for delays over 2 hours"
        },
        {
          title: "Отмена рейса",
          content: "При отмене рейса авиакомпания обязана предложить замену или полный возврат. Если причина не является «форс-мажором», вы также имеете право на компенсацию от 250 до 600 евро (в ЕС).",
          tip: "Ask specifically for 'EU261 compensation' if your flight was cancelled"
        },
        {
          title: "Стыковочный рейс",
          content: "Если вы опаздываете на стыковку по вине авиакомпании — они обязаны посадить вас на следующий рейс без доплаты. Немедленно сообщите персоналу.",
          tip: "If you miss a connection due to the airline's fault, they must rebook you"
        },
        {
          title: "Ночь в аэропорту",
          content: "При длительных задержках авиакомпания должна предоставить гостиницу или компенсировать расходы. Сохраняйте все квитанции. Не соглашайтесь на ваучеры вместо наличных без изучения условий.",
          tip: "Save all receipts for expenses during delays — you may be reimbursed"
        },
        {
          title: "Оверукинг (Сверхбронирование)",
          content: "Если вас не посадили на самолёт из-за овербукинга — это называется «отказ в посадке» (denied boarding). Вы имеете право на компенсацию и альтернативный рейс. Никогда не уходите без документа, подтверждающего ваш отказ в посадке.",
          tip: "Always get written confirmation if you are denied boarding"
        }
      ]
    }
  ]
};
