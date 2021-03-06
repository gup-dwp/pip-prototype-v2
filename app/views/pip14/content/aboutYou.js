var data = [ {
  "page"               : "1",
  "maxPages"           : "36",
  "title"              : "Title of page",
  "introText"          : "Introduction paragraph which should be over two or three lines maximum ideally. Maybe two or three sentences.",
  "continue"           : "Save and continue",
  "saveExit"           : "Save and come back later",
  "backText"           : "Back",
  "frequency"          : [
    {
      "allTime"        : "All the time",
      "moreHalf"       : "More than half the time",
      "lessHalf"       : "Less than half the time",
      "ownWords"       : "Explain how often in your own words"
    },
  ],
  "helper" : [
    {
      "page"             : "1",
      "heading"          : "Help with your application",
      "introText"        : "You'll be asked questions that need detailed answers about the effects of your condition.  It might help if you asked a friend, family member or support organisation to help you.",
      "question"         : "Is someone helping you fill in this application?",
      "question2"        : "The name of the person helping you",
      "question3"        : "Their relationship to you",
      "backLink"         : "/pip14/summaryMain"
    },
  ],
  "aboutYou" : [
    {
      "page"             : "2",
      "heading"          : "About you",
      "question"         : "First name",
      "question2"        : "Middle name (optional)",
      "question3"        : "Last name",
      "question4"        : "Your date of birth",
      "question5"        : "National Insurance number",
      "backLink"         : "/pip14/helper"
    },
  ],
  "contactDetails" : [
    {
      "page"             : "3",
      "heading"          : "Your contact details",
      "question"         : "Your address",
      "question2"        : "Postcode",
      "question3"        : "Postcode",
      "question4"        : "Your phone number",
      "q4HintText"       : "We'll only use this if we need to contact you about your claim.",
      "question5"        : "Alternative phone number",
      "question6"        : "Email address",
      "backLink"         : "/pip14/aboutYou"
    },
  ],
  "contactPref" : [
    {
      "page"             : "4",
      "heading"          : "Contact preferences",
      "question"         : "Do you want to get SMS text messages about the progress of your claim?",
      "question2"        : "Mobile number",
      "question3"        : "You will get your decision letter in the post. Do you need this in a different format eg braille, large print or audio CD?",
      "checkbox1"        : "Large print",
      "checkbox2"        : "Braille",
      "checkbox3"        : "Audio CD",
      "checkbox4"        : "Other",
      "textareaQ"        : "What format do you need?",
      "textareaHintText" : "We can only provide this if it’s necessary because of your condition.",
      "backLink"         : "/pip14/contactDetails"
    },
  ],
  "currentWhereabouts" : [
    {
      "page"             : "5",
      "heading"          : "Your current whereabouts",
      "question"         : "Are you currently staying in:",
      "question2"        : "When did you go in?",
      "q2HintText"       : "eg yesterday or 23/11/2015",
      "question3"        : "What’s the address?",
      "question4"        : "Postcode",
      "backLink"         : "/pip14/contactPref"
    }
  ],
  "nationality" : [
    {
      "page"             : "6",
      "heading"          : "Nationality and where you live",
      "question"         : "What is your nationality?",
      "question2"        : "Your nationality",
      "question3"        : "Do you currently live in England, Scotland or Wales?",
      "question4"        : "Where you live",
      "question5"        : "Have you been out of England, Scotland or Wales for more than a year in the last 3 years?",
      "q5HintText"       : "This could be one trip or a number of trips adding up to a year.",
      "backLink"         : "/pip14/currentWhereabouts"
    },
  ],
  "paymentsFromAbroad" : [
    {
      "page"             : "7",
      "heading"          : "Payments from abroad",
      "introText"        : "This question asks about any money that you or any of your close family have received or paid to any country outside of the UK. This is to check that we are the correct country to pay your benefit.",
      "question"         : "Have you or any of your close family worked abroad or been paid benefits from outside the United Kingdom?",
      "qHintText"        : "This means your partner or a parent that you're financially dependent on, and includes state pensions.",
      "countriesIntro"   : "These questions are about the following countries:",
      "countries"        : "Austria, Belgium, Bulgaria, Croatia, Cyprus, Czech Republic, Denmark, Estonia, Finland, France, Germany, Gibraltar, Greece, Hungary, Iceland, Ireland, Italy, Latvia, Liechtenstein, Lithuania, Luxembourg, Malta, Netherlands, Norway, Poland, Portugal, Romania, Slovakia, Slovenia, Spain, Sweden and Switzerland.",
      "question2"        : "Have you or your close family claimed or been paid any benefits or pensions from any of these countries since your claim date?",
      "question3"        : "Have you or your close family worked or paid National Insurance in any of these countries since your claim date?",
      "backLink"         : "/pip14/nationality"
    },
  ],
  "conditionDetails" : [
    {
      "page"             : "8",
      "heading"          : "Your conditions and disabilities",
      "introText"        : "List all the conditions or disabilities you have that affect your life and when they started to affect you.",
      "rowHd"            : "Condition",
      "conditionHd"      : "Name of condition",
      "startedHd"        : "When it started",
      "removeLink"       : "Remove this",
      "backLink"         : "/pip14/summaryMain?show=yourCondition&next=conditionDetails&back=paymentsFromAbroad"
    },
  ],
  "medications" : [
    {
      "page"             : "9",
      "heading"          : "Your medications",
      "question"         : "Are you currently taking any medication?",
      "rowHd"            : "Medication",
      "medicationHd"     : "Name of medication",
      "dosageHd"         : "Dosage",
      "dosageHintText"   : "eg 40mg",
      "oftenHd"          : "How often you take it",
      "oftenHintText"    : "eg 2 tablets, twice a day",
      "removeLink"       : "Remove this",
      "backLink"         : "/pip14/conditionDetails"
    },
  ],
  "manageMedications" : [
    {
      "page"             : "10",
      "heading"          : "Taking your medication",
      "question"         : "Does your condition affect you:",
      "textareaQ"        : "Tell us the details",
      "question2"        : "How often does this affect you taking your medication?",
      "howoften1"        : "At least once a day",
      "howoften2"        : "More than half the time",
      "howoften3"        : "Less than half the time",
      "howoften4"        : "Explain how often in your own words",
      "ownWords"         : "If you can, tell us roughly how many days out of a week or month you’re affected",
      "question3"        : "How do you manage your medication?",
      "question4"        : "Explain how your condition affects you taking your medication.",
      "helpTextHd"       : "Include if:",
      "helpText"         : ["you could end up at risk","what you’re able to do depends on the type of day you’re having"],
      "backLink"         : "/pip14/medications"
    },
  ],
  "treatments" : [
    {
      "page"             : "11",
      "heading"          : "Your treatments and therapies",
      "introText"        : "Treatments and therapies can include chemotherapy, physiotherapy, medical massages or dialysis.",
      "question"         : "Are you having, or do you have planned, any treatment or therapy?",
      "rowHd"            : "Treatment or therapy",
      "treatmentHd"      : "Name of treatment or therapy",
      "oftenHd"          : "When or how often",
      "removeLink"       : "Remove this",
      "question2"        : "Do you have treatment or therapy at your home address?",
      "backLink"         : "/pip14/manageMedications"
    },
  ],
  "sideEffects" : [
    {
      "page"             : "12",
      "heading"          : "Side effects",
      "question"         : "Do you get side effects from any medication, treatment or therapy?",
      "question2"        : "Describe the side effects you get.",
      "backLink"         : "/pip14/treatments"
    },
  ],
  "conditionAffects" : [
    {
      "page"             : "13",
      "heading"          : "Changes to your condition",
      "question"         : "Do the effects of your condition change or vary?",
      "qHintText"        : "This includes if some days, weeks or months are worse than others.",
      "question2"        : "How do the effects of your condition change or very?",
      "question3"        : "How often do the effects of your condition change or vary?",
      "q3HintText"       : "If you can, tell us roughly how many days out of a week or month",
      "backLink"         : "/pip14/sideEffects"
    },
  ],
  "monitoringCondition" : [
    {
      "page"             : "14",
      "heading"          : "Monitoring your condition",
      "question"         : "Do you rely on someone to monitor your condition most days because, if they do not, you could be at risk, or a danger to yourself or others?",
      "question2"        : "Roughly how many hours a week do you rely on them to help monitor your condition?",
      "question3"        : "Why do you rely on someone to monitor your condition?",
      "question4"        : "How do they monitor your condition?",
      "backLink"         : "/pip14/conditionAffects"
    },
  ],
  "healthcareprofessional" : [
    {
      "page"             : "15",
      "heading"          : "Professionals who know about your condition",
      "introText"        : "It could help us get the information we need if we’re able to contact professionals who will share details about the effects of your condition with us. They could be a doctor, counsellor, key worker or anyone else who has information about the effects of your condition.",
      "question"         : "Do you agree to us contacting professionals who will share information about your condition with us?",
      "rowHd"            : "Professional",
      "nameHd"           : "Their name",
      "professionHd"     : "Their profession",
      "addressHd"        : "Their address",
      "phoneHd"          : "Their phone number",
      "lastSeenHd"       : "When you last saw them",
      "removeLink"       : "Remove this",
      "backLink"         : "/pip14/monitoringCondition"
    },
  ],
  "submitEvidence" : [
    {
      "page"             : "16",
      "heading"          : "Information you can send",
      "introText"        : "<p>If this was a real application we'd ask if you could send in any information that could give more detail about the effects of your condition.</p><p>Because this is a test application, don't send us any information.</p><p>But, we want to know what you could send if this was real.</p>",
      "question"         : "Tell us which of the following you already have to hand and would have been able to post to us quickly:",
      "question2"        : "Which of the following are you able to send us?",
      "q2HintText"       : "You can tick as many of these as you like",
      "question3"        : "How will you be sending us the information?",
      "backLink"         : "/pip14/healthcareprofessional"
    },
  ],
  "specialAids" : [
    {
      "page"              : "17",
      "heading"           : "Aids and adaptations",
      "question"          : "Where do you rely on aids, adaptations or anything else to make things easier for you?",
      "qHintText"         : "Include any aids or adaptations you need but have not got yet.",
      "homeLabel"         : "Getting in and out of your home",
      "homeTextareaQ"     : "List aids, adaptations or anything you have to use to make getting in or out of your home easier.",
      "stairsLabel"       : "Hallway or stairs",
      "stairsTextareaQ"   : "List aids, adaptations or anything you have in your hallway or on your stairs to make things easier.",
      "kitchenLabel"      : "Kitchen or dining area",
      "kitchenTextareaQ"  : "List aids, adaptations or anything you have to use in your kitchen to make things easier.",
      "loungeLabel"       : "Lounge or sitting room",
      "loungeTextareaQ"   : "List aids, adaptations or anything you have to use in your lounge or sitting room to make things easier.",
      "bedroomLabel"      : "Your bedroom",
      "bedroomTextareaQ"  : "List aids, adaptations or anything you have to use in your bedroom to make things easier.",
      "bathroomLabel"     : "Bathroom or toilet",
      "bathroomTextareaQ" : "List aids, adaptations or anything you have to use in your bathroom or toilet to make things easier.",
      "outsideLabel"      : "Outside",
      "outsideTextareaQ"  : "List aids, adaptations or anything you have to use when you're outside to make things easier.",
      "question2"         : "List anything else you have with you all or most of the time to make things easier for you.",
      "q2HintText"        : "This might include things like a wheelchair, hearing aid or prosthetic limb.",
      "backLink"          : "/pip14/submitEvidence"
    },
  ],
  "sight" : [
    {
      "page"             : "18",
      "heading"          : "Your sight",
      "question"         : "Does your condition affect your eyesight?",
      "question2"        : "Roughly how often is it affected?",
      "question3"        : "How does your condition affect your sight?",
      "backLink"         : "/pip14/specialAids"
    },
  ],
  "speech" : [
    {
      "page"             : "19",
      "heading"          : "Your speech",
      "question"         : "Does your condition affect your speech?",
      "question2"        : "Roughly how often is it affected?",
      "question3"        : "How does your condition affect your speech?",
      "backLink"         : "/pip14/sight"
    },
  ],
  "hearing" : [
    {
      "page"             : "20",
      "heading"          : "Your hearing",
      "question"         : "Does your condition affect your hearing?",
      "question2"        : "Which of these apply?",
      "hearingAidLabel"  : "You need a hearing aid",
      "2hearingAidLabel" : "You need two hearing aids",
      "implantLabel"     : "You have a cochlear implant",
      "somethingLabel"   : "You rely on something else",
      "somethingTxtQ"    : "Explain what your rely on",
      "someoneLabel"     : "You rely on someone to help you communicate",
      "someoneTxtQ"      : "How they help you",
      "cantHearLabel"    : "You can not hear at all",
      "cantHearTxtQ"     : "Explain how you communicate",
      "question3"        : "Explain how your condition affects your hearing.",
      "helpTextHd"       : "Include if the effects change depending on:",
      "helpText"         : ["where you are","what you’re doing"],
      "backLink"         : "/pip14/speech"
    },
  ],
  "gettingUp" : [
    {
      "page"             : "21",
      "heading"          : "Getting up and moving around",
      "question"         : "Does your condition affect you:",
      "motivatedLabel"   : "being motivated to get up",
      "sittingUpLabel"   : "sitting up",
      "outBedLabel"      : "getting out of bed",
      "standingLabel"    : "standing",
      "movingRoomsLabel" : "moving between rooms",
      "stairsLabel"      : "using the stairs",
      "otherWayLabel"    : "in another way",
      "doesntLabel"      : "Your condition does not affect you moving around your home",
      "question2"        : "How often does your condition affect you moving around your home?",
      "question3"        : "When your condition affects you, how do you get up and move around your home?",
      "encourageLabel"   : "Someone needs to encourage you to get out of bed",
      "helpLabel"        : "Someone needs to help you move",
      "relyLabel"        : "You rely on aids or something else to help",
      "manageLabel"      : "You manage on your own, but with difficulty",
      "dontLabel"        : "You do not get out of bed",
      "question4"        : "Explain how your condition affects you getting up and moving around.",
      "helpTextHd"       : "Include if:",
      "helpText"         : ["it takes a long time","what you’re able to do","depends on the type of day you’re having","you risk having an accident or hurting yourself","moving around has an effect on your condition"],
      "backLink"         : "/pip14/summaryMain?show=yourHome&next=gettingUp&back=hearing"
    },
  ],
  "toilet" : [
    {
      "page"             : "22",
      "heading"          : "Using the toilet",
      "question"         : "Does your condition affect you:",
      "onOffLabel"       : "getting on or off the toilet",
      "cleaningLabel"    : "cleaning yourself",
      "bladderLabel"     : "controlling your bladder",
      "bowelLabel"       : "controlling your bowel",
      "otherWayLabel"    : "in another way",
      "doesntLabel"      : "Your condition does not affect you using the toilet",
      "question2"        : "How often does your condition affect you using the toilet?",
      "question3"        : "When your condition affects you, how do you use the toilet?",
      "encourageLabel"   : "Someone needs to encourage you to use the toilet",
      "helpLabel"        : "Someone needs to help you",
      "relyLabel"        : "You rely on aids or something else to help",
      "manageLabel"      : "You manage on your own, but with difficulty",
      "catheterLabel"    : "You have a catheter or a stoma",
      "question4"        : "Explain how your condition affects you using the toilet.",
      "helpTextHd"       : "Include:",
      "helpText"         : ["what you’re able to do depends on the type of day you’re having","you risk having an accident or hurting yourself","it takes a long time","using the toilet has an effect on your condition"],
      "backLink"         : "/pip14/gettingUp"
    },
  ],
  "washing" : [
    {
      "page"             : "23",
      "heading"          : "Washing yourself",
      "question"         : "Does your condition affect you:",
      "motivatedLabel"   : "being motivated to wash",
      "knowingLabel"     : "knowing when you should wash",
      "inOutBathLabel"   : "getting into or out of the bath or shower",
      "feetOrLegsLabel"  : "cleaning your feet or legs",
      "backLabel"        : "cleaning your back",
      "shoulderLabel"    : "cleaning between your shoulders and waist",
      "hairLabel"        : "cleaning your hair",
      "standingLabel"    : "standing or balancing",
      "otherWayLabel"    : "in another way",
      "doesntLabel"      : "Your condition does not affect you washing yourself",
      "question2"        : "How often does your condition affect you washing yourself?",
      "question3"        : "When your condition affects you, how do you wash?",
      "encourageLabel"   : "Someone needs to encourage you to wash",
      "helpLabel"        : "Someone needs to wash you, supervise you or help you",
      "relyLabel"        : "You rely on aids or something else to help",
      "manageLabel"      : "You manage on your own, but with difficulty",
      "dontLabel"        : "You do not wash",
      "question4"        : "Explain how your condition affects you washing",
      "helpTextHd"       : "Include if:",
      "helpText"         : ["it takes a long time","what you’re able to do depends on the type of day you’re having","you risk having an accident or hurting yourself","washing yourself has an effect on your condition"],
      "backLink"         : "/pip14/toilet"
    },
  ],
  "gettingDressed" : [
    {
      "page"             : "24",
      "heading"          : "Getting dressed",
      "question"         : "Does your condition affect you:",
      "motivatedLabel"   : "being motivated to get dressed",
      "knowingLabel"     : "choosing suitable clothes eg for the weather",
      "shoesLabel"       : "putting on shoes or socks",
      "lacesLabel"       : "tying shoe laces",
      "buttonsLabel"     : "fastening buttons",
      "zipsLabel"        : "using zips",
      "jumperLabel"      : "putting on jumpers or t-shirts",
      "otherWayLabel"    : "in another way",
      "doesntLabel"      : "Your condition does not affect you getting dressed.",
      "question2"        : "How often does your condition affect you getting dressed?",
      "question3"        : "When your condition affects you, how do you get dressed?",
      "encourageLabel"   : "Someone needs to encourage you to get dressed",
      "helpLabel"        : "Someone needs to help you to get dressed",
      "relyLabel"        : "You rely on aids or something else to help",
      "manageLabel"      : "You manage on your own, but with difficulty",
      "dontLabel"        : "You do not get dressed",
      "question4"        : "Explain how your condition affects you getting dressed.",
      "helpTextHd"       : "Include if:",
      "helpText"         : ["it takes a long time","what you’re able to do depends on the type of day you’re having","you risk having an accident or hurting yourself","getting dressed has an effect on your condition"],
      "backLink"         : "/pip14/washing"
    },
  ],
  "hotMeal" : [
    {
      "page"             : "25",
      "heading"          : "Making a hot meal from fresh ingredients",
      "introText"        : "If you do not make hot meals from fresh ingredients, tell us if you’d be able to if you had to.",
      "question"         : "Does your condition affect you:",
      "motivatedLabel"   : "being motivated to make a hot meal from fresh ingredients",
      "choppingLabel"    : "chopping or peeling",
      "openingLabel"     : "opening tins or jars",
      "hobLabel"         : "using a hob",
      "microwaveLabel"   : "using a microwave",
      "pansLabel"        : "lifting pans",
      "plateLabel"       : "putting food on a plate",
      "otherWayLabel"    : "in another way",
      "doesntLabel"      : "Your condition does not affect you making a hot meal from fresh ingredients.",
      "question2"        : "How often does your condition affect you making a hot meal from fresh ingredients?",
      "frequency"          : [
        {
          "allTime"        : "Every time you prepare or cook a hot meal",
          "moreHalf"       : "More than half the time",
          "lessHalf"       : "Less than half the time",
          "ownWords"       : "Explain how often in your own words"
        },
      ],
      "question3"        : "When your condition affects you, how do you prepare and cook a hot meal from fresh ingredients?",
      "encourageLabel"   : "Someone needs to encourage or remind you",
      "helpLabel"        : "Someone needs to supervise you or help you to prepare or cook a meal",
      "relyLabel"        : "You rely on aids or something else to help",
      "manageLabel"      : "You manage on your own, but with difficulty",
      "dontLabel"        : "You avoid cooking a meal from fresh ingredients",
      "question4"        : "Explain how your condition affects you preparing or cooking a hot meal from fresh ingredients.",
      "helpTextHd"       : "Include if:",
      "helpText"         : ["it takes a long time","what you’re able to do depends on the type of day you’re having","you risk having an accident or hurting yourself","cooking a meal has an effect on your condition"],
      "backLink"         : "/pip14/washing"
    },
  ],
  "eatingAndDrinking" : [
    {
      "page"             : "26",
      "heading"          : "Eating and drinking",
      "question"         : "Does your condition affect you:",
      "motivatedLabel"   : "being motivated to eat or drink",
      "knowingWhenLabel" : "knowing when to eat or drink",
      "knowingMuchLabel" : "knowing how much to eat or drink",
      "cuttingLabel"     : "cutting up food",
      "holdingLabel"     : "holding cutlery",
      "mouthLabel"       : "putting food or drink in your mouth",
      "chewingLabel"     : "chewing food",
      "swallowingLabel"  : "swallowing",
      "otherWayLabel"    : "in another way",
      "doesntLabel"      : "Your condition does not affect you eating or drinking",
      "question2"        : "How often does your condition affect you eating or drinking?",
      "frequency"          : [
        {
          "allTime"        : "Every time you eat or drink",
          "moreHalf"       : "More than half the time",
          "lessHalf"       : "Less than half the time",
          "ownWords"       : "Explain how often in your own words"
        },
      ],
      "question3"        : "When your condition affects you, how do you eat and drink?",
      "encourageLabel"   : "Someone needs to encourage or remind you to eat or drink",
      "helpLabel"        : "Someone needs to supervise or help you to eat or drink",
      "relyLabel"        : "You rely on aids or something else to help",
      "manageLabel"      : "You manage on your own, but with difficulty",
      "dontLabel"        : "You avoid eating or drinking",
      "question4"        : "Explain how your condition affects you eating or drinking.",
      "helpTextHd"       : "Include if:",
      "helpText"         : ["eating or drinking takes a long time","what you’re able to do depends on the type of day you’re having","you risk having an accident or hurting yourself","eating or drinking has an effect on your condition"],
      "backLink"         : "/pip14/hotMeal"
    },
  ],
  "gettingOut" : [
    {
      "page"             : "27",
      "heading"          : "Getting out and walking about",
      "question"         : "Does your condition affect you:",
      "motivatedLabel"   : "being motivated to go out",
      "distanceLabel"    : "walking any distance",
      "carLabel"         : "walking to your car",
      "streetLabel"      : "walking to the end of your street",
      "shopLabel"        : "walking to the local shop",
      "supermarketLabel" : "walking around the supermarket",
      "townLabel"        : "walking around town",
      "otherWayLabel"    : "in another way",
      "doesntLabel"      : "Your condition does not affect you getting out or walking about",
      "question2"        : "How often does your condition affect you getting out and walking about?",
      "frequency"          : [
        {
          "allTime"        : "Every time you need to go out",
          "moreHalf"       : "More than half the time",
          "lessHalf"       : "Less than half the time",
          "ownWords"       : "Explain how often in your own words"
        },
      ],
      "question3"        : "When your condition affects you, how do you get out and walking about?",
      "encourageLabel"   : "Someone needs to encourage you to go out",
      "helpLabel"        : "Someone needs to help you walk around",
      "wheelchairLabel"  : "You use a wheelchair",
      "relyLabel"        : "You rely on an assistance dog, walking stick or something else to help",
      "manageLabel"      : "You manage on your own, but with difficulty",
      "dontLabel"        : "You don’t get out or walk about",
      "question4"        : "Explain how your condition affects you getting out or walking about.",
      "helpTextHd"       : "Include if:",
      "helpText"         : ["it takes a long time","what you’re able to do depends on the type of day you’re having","you risk having an accident or hurting yourself","getting out or walking about has an effect on your condition"],
      "backLink"         : "/pip14/summaryMain?show=gettingOut&next=gettingOut&back=eatingAndDrinking"
    },
  ],
  "mixing" : [
    {
      "page"             : "28",
      "heading"          : "Mixing with other people",
      "question"         : "Does your condition affect you:",
      "youDontKnowLabel" : "mixing with people you do not know",
      "youKnowLabel"     : "mixing with people you know",
      "convosLabel"      : "understanding simple sentences",
      "longConvoLabel"   : "understanding long or complicated sentences",
      "whatToSayLabel"   : "getting across what you want to say",
      "behaveToYouLabel" : "understanding how people are behaving towards you",
      "otherWayLabel"    : "in another way",
      "doesntLabel"      : "Your condition does not affect you mixing with people",
      "question2"        : "How often does your condition affect you mixing with people?",
      "frequency"          : [
        {
          "allTime"        : "Every time you have to mix with people",
          "moreHalf"       : "More than half the time",
          "lessHalf"       : "Less than half the time",
          "ownWords"       : "Explain how often in your own words"
        },
      ],
      "question3"        : "When your condition affects you, how do you mix with people?",
      "encourageLabel"   : "Someone needs to encourage you to mix with people",
      "relyLabel"        : "You rely on someone to explain things to you",
      "superviseLabel"   : "Someone needs to supervise you",
      "ownLabel"         : "You manage on your own, but with difficulty",
      "question4"        : "Explain how your condition affects you mixing with people.",
      "helpTextHd"       : "Include if:",
      "helpText"         : ["what you’re able to do depends on the type of day you’re having","mixing with people could put you or others at risk","if mixing with people has an effect on your condition"],
      "backLink"         : "/pip14/eatingAndDrinking"
    },
  ],
  "localJourney" : [
    {
      "page"             : "29",
      "heading"          : "Planning a local journey",
      "introText"        : "This question is about how you’d plan to get to somewhere local that you’ve never been before. It’s not about getting there - you’ll have chance to tell us about that later. It could apply if you have a mental health or cognitive condition.",
      "question"         : "Would your condition affect you planning a local journey to somewhere you’ve never been before?",
      "question2"        : "How would you plan a local journey?",
      "relyLabel"        : "You would rely on someone else to plan the journey",
      "helpLabel"        : "Someone would need to help you understand maps or bus timetables",
      "ownLabel"         : "You would manage on your own, but with difficulty",
      "otherWayLabel"    : "in another way",
      "question3"        : "Explain how your condition would affect you planning a local journey.",
      "q3HintText"       : "Include if it would take you a long time to plan a local journey.",
      "backLink"         : "/pip14/summaryMain?show=understanding&next=localJourney&back=mixing"
    },
  ],
  "somewhereNeverBeenBefore" : [
    {
      "page"             : "30",
      "heading"          : "Getting somewhere you have never been",
      "question"         : "Would your condition affect you:",
      "knowingLabel"     : "knowing where to go",
      "publicLabel"      : "using public transport",
      "askingHelpLabel"  : "asking for help",
      "lostLabel"        : "recovering from getting lost",
      "mapsLabel"        : "following directions on a map or sat nav",
      "otherWayLabel"    : "in another way",
      "doesntLabel"      : "Your condition would not affect you getting somewhere you have never been.",
      "question2"        : "How would you get to somewhere you have never been?",
      "relySomeoneLabel" : "You rely on someone to guide you",
      "relyGuideLabel"   : "You rely on an assistance dog or something else to help you find your way",
      "ownLabel"         : "You manage on your own, but with difficulty",
      "wouldNotLabel"    : "You would not go to somewhere you have never been",
      "question3"        : "Explain how your condition would affect you getting to somewhere you have never been.",
      "helpTextHd"       : "Include if:",
      "helpText"         : ["what you’re able to do depends on the type of day you’re having","you risk having an accident or hurting yourself","if your condition would affect how long it takes you to get somewhere","getting somewhere you have never been would have an effect on your condition"],
      "backLink"         : "/pip14/localJourney"
    },
  ],
  "somewhereYouKnow" : [
    {
      "page"             : "31",
      "heading"          : "Getting somewhere you know",
      "question"         : "Would your condition affect you:",
      "knowingLabel"     : "knowing where to go",
      "publicLabel"      : "using public transport",
      "askingHelpLabel"  : "asking for help",
      "lostLabel"        : "recovering from getting lost",
      "mapsLabel"        : "following directions on a map or sat nav",
      "otherWayLabel"    : "in another way",
      "doesntLabel"      : "Your condition does not affect you getting somewhere you know",
      "question2"        : "How would you get to somewhere you know?",
      "relySomeoneLabel" : "You rely on someone to guide you",
      "relyGuideLabel"   : "You rely on an assistance dog or something else to help you find your way",
      "ownLabel"         : "You manage on your own, but with difficulty",
      "question3"        : "Explain how your condition affects you getting somewhere you know.",
      "helpTextHd"       : "Include if:",
      "helpText"         : ["what you’re able to do depends on the type of day you’re having","you risk having an accident or hurting yourself","your condition affects how long it takes you to get there","getting somewhere has an effect on your condition"],
      "backLink"         : "/pip14/somewhereNeverBeenBefore"
    },
  ],
  "understanding" : [
    {
      "page"             : "32",
      "heading"          : "Understanding written information",
      "question"         : "Does your condition affect your understanding of:",
      "wordsLabel"       : "words or simple senteces",
      "sentencesLabel"   : "long or complicated sentences",
      "symbolsLabel"     : "symbols, such as pound signs or exclamation marks",
      "datesLabel"       : "dates",
      "signsLabel"       : "signs, such as safety signs",
      "elseLabel"        : "something else",
      "doesntLabel"      : "Your condition does not affect your understanding of written information",
      "question2"        : "How do you work out what they mean?",
      "relySomeoneLabel" : "You rely on somoene to explain things to you",
      "relyRemindLabel"  : "You rely on someone to remind you what things mean",
      "ownLabel"         : "You manage on your own, but with difficulty",
      "otherWayLabel"    : "In another way",
      "question3"        : "Explain how your condition affects you understanding written information.",
      "helpTextHd"       : "Include if:",
      "helpText"         : ["it can take you a long time to work out what things mean","not understanding things puts you at risk"],
      "backLink"         : "/pip14/somewhereYouKnow"
    },
  ],
  "money" : [
    {
      "page"             : "33",
      "heading"          : "Dealing with money",
      "introText"        : "If you do not deal with money or bills, tell us if you’d be able to if you had to.",
      "question"         : "Does your condition affect you:",
      "billsLabel"       : "understanding bills",
      "spendLabel"       : "knowing how much you have to spend",
      "costLabel"        : "understanding how much things cost",
      "changeLabel"      : "knowing how much change you should get",
      "overspendLabel"   : "overspending",
      "doesntLabel"      : "Your condition does not affect you dealing with money",
      "question2"        : "How do you deal with money?",
      "relySomeoneLabel" : "Someone has to explain things to you",
      "relyRemindLabel"  : "Someone has to remind you or encourage you to pay bills",
      "ownLabel"         : "You manage on your own, but with difficulty",
      "notAbleLabel"     : "You would not be able to deal with money",
      "otherWayLabel"    : "In another way",
      "question3"        : "Explain how your condition affects you dealing with money.",
      "helpTextHd"       : "Include if:",
      "helpText"         : ["what you’re able to do depends on the type of day you’re having","it can take a long time to work things out","you could end up at risk"],
      "backLink"         : "/pip14/understanding"
    },
  ],
  "additionalInfo" : [
    {
      "page"             : "35",
      "heading"          : "Additional information",
      "introText"        : "Include anything else that explains how your condition or disability affects you.",
      "backLink"         : "/pip14/checkYourAnswers"
    },
  ],
  "declaration" : [
    {
      "page"             : "36",
      "heading"          : "Declaration",
      "listHeading"      : "By sending this application you agree:",
      "list"             : ["the information in this application is complete and correct as far as you know","to promptly <a href='#' data-target='legalDetails' class='showLegal'>report any changes to your circumstances</a>"],
      "disclaimer"       : "You might have to go to court or pay a penalty if you deliberately give false or incomplete information, or do not report changes. Your Personal Independence Payment may also be stopped or reduced.",
      "submit"           : "I agree - send me application",
      "backLink"         : "/pip14/additionalInfo"
    },
  ],
  "thankYou" : [
    {
      "heading"          : "Your application has been sent",
      "heading2"         : "Send more information",
      "p1"               : "You said you’re going to send information about the effects of your condition. Write your National Insurance number on each page you send and post it in the next two weeks. If you don’t, a decision will be made without it.",
      "postTo"           : "Post to:",
      "address"          : ["Address 1","Address 2","City","Postcode"],
      "heading3"         : "What happens next?",
      "p2"               : "You'll get sent a letter telling you the decision. You might be asked to meet with a healthcare professional to discuss how your condition affects you in more detail.",
      "p3"               : "You must <a href='#' rel='external'>report any change to your circumstances</a>, including if you come out of hospital.",
      "p4"               : "If you have any queries about your claim, phone 0345 850 3322. You’ll need your National Insurance number.",
      "button"           : "Return to GOV.UK"
    },
  ],


}];

exports.getTableData = function() {
  return data;
};
