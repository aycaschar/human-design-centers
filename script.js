window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");

  const texts = [
    [
      "Head Center is for inspiration and ideas; a pressure center.When it is Open- you take in and amplify ideas, inspirations and questions from those around you who have defined colored) head centers.  Feelings of being scattered, overwhelmed, and/or pressure to figure things out and put into play all those ideas swirling around in your head.     It is important to use your Strategy to know which inspiration and ideas are correct for you to follow through with, otherwise you may feel a lot of frustration and stress running around pursuing things that are not correct for you.",
    ],
    [
      "Ajna Center is for concrete thinking, analysis, and data storage. When it is Open – You have unlimited ways to think and analyze different situations and information.  By design- you are open-minded, just not designed to hold all the data storage.  You may have difficulty making decisions or being definite about things. Be aware of your gifts to see and analyze things from every direction in any situation. Stay flexible.  Make lists to remember all that is going on and use your strategy to make decisions to avoid being overwhelmed or frustrated.",
    ],
    [
      "Throat Center is for communication energy and manifestation of ideas into form and action.When it is Open – You amplify communication energy and can regulate your speaking voice and delivery to whichever audience you are with.  You need attention/recognition from others to access the other energies in your chart.  You have difficulty feeling heard and may either be very talkative or very quiet or for some of you a combination of both. It is important to recognize your need for attention and seek it in appropriate ways.  Wait for the right opportunities to speak.  It is also important not to push the energy of the throat onto others.  This would be your opinions, demands, criticisms or advice, without first being asked or recognized.  Incorrect use of the throat energy affects how the thyroid gland works.",
    ],
    [
      "G-Center is for sense of self, direction in life, love and “right place”. When it is Open – You have a fluctuating sense of self, which changes according to whom you are with (remember you take in amplify everyone around you).  You are here to receive love and to know others deeply.  You may have difficulty figuring out which way to go or feel you are going in multiple directions quite a bit. It is important with an open G/Self center to let go of trying to “know” or “define” yourself as you have a gift of flexibility around your identity and direction in life.  It is important to only be with people and in places that truly feel good to you.  Do what you can to avoid the pressure of ‘finding yourself’, support your self-esteem and reassure yourself often about being loveable.  It may also help to have a trusted friend with a defined G/Self center to bounce things off.",
    ],
    [
      " Ego Center is for willpower energy, business, material values, and generating and managing physical resources. Open- If you have an open- heart center, you do not have consistent willpower, so it is hard to force yourself to do things you do not want to do.  You may also have difficulty correctly valuing things, people and yourself. It is important not to make promises, as you do not have the willpower to ensure that you will honor them.  Is important to just go with the flow.  Use your strategy for deciding about commitments.  Will also be helpful to practice valuing yourself and others, and ensure that you set strong boundaries around what you charge for your time/services.  Remember do not push with willpower you DO NOT have or the result will be burn-out or exhaustion.  It is important to set time to rest and relax.",
    ],
    [
      " Spleen Center is for intuition, survival, time consciousness, and the immune system. When it is Open- You are intuitive, yet receive that information inconsistently.  You most likely are time-challenged, meaning you may be one of those people who is always late as you let time, get away from you.  You are very sensitive to the slightest changes and symptoms from your immune system. Your fears may paralyze you, and you most likely have difficulty knowing when to let things go. It is important to learn to trust your intuition and pay close attention to your immune system.  Find ways to keep you on time (set a timer on your phone) and let things go that are no longer serving you (relationships, grudges, jobs, clutter, feelings).  You are sensitive to others and may have strong intuitions about others medically.  Learn to push through your splenic fears that are holding you back or keeping you stuck.",
    ],
    [
      " Sacral Center is for work force and life force energy. When it is Open- It is vital to remember that you DO NOT have sustainable energy, so you cannot keep up with someone who has a defined sacral.  Unfortunately, most of you have been raised by someone with a defined sacral and they expect you too.  You cannot.  You will take in and amplify their sacral energy, so you can work harder than anyone, but only for short periods of time.  You then need to rest and recover.It is important with an open sacral to find employment that does not demand sustained physical energy or long-term commitment.  You will find taking naps when you are tired is important to managing your energy.  As I say to clients, if you are in a track meet, you are the person running the 100-meter dash, not the 1600-meter (mile) race.  You may also find that having no children to just 1 or 2 is perfect for you as you do not have the sustainable energy needed for more. It is also important to recognize that you do not always know when to slow down or stop.  It is always better to stop before burnout as recovery takes so much longer.",
    ],
    [
      " Solar-Plexus Center is for emotional energy.When it is Open- You take in and maximize the emotional energy of anyone around you with a defined (colored) solar plexus, so you are able to feel their emotions more intensely than they feel them.  You like to keep everyone happy and DO NOT like to rock the boat.It is important to remember that you can recognize the emotional highs and lows of others and while you are able to feel them, they are not yours, so you want to let them go.  Learn to speak your truth without concern for the emotional reaction of others.  Experiment with all the emotions you have flowing through you and then choose which ones you want to experience.  This will help you to not overwhelm your circuits with all the emotions around you.  It is also very important to dispel or release the emotional energy of others.  When you are not able to, you may experience depression, diabetes, emotional eating and weight issues.",
    ],
    [
      " Root Center is for adrenaline energy- a pressure center. When it is Open- you feel pressure to get things done and have difficulty if your list of things to do is too long (when isn’t it).  Most of the pressure you feel will be self-imposed.  You will amplify adrenaline energy from those around you with defined root centers, which helps you be productive, just be aware it may be at the expense of being through or doing quality work. It is important to recognize that the pressure you are feeling is just energy and that you can choose to relax and it isn’t the end of the world if everything on you ‘to-do’ list isn’t complete.  Learning how to use others root center energy wisely to get things done, will help to release the pressure that you would otherwise feel and alleviates stress.  Even if the pressure is coming from you it can cause severe effects on your body and mind.  Concerns would be adrenal burnout and anxiety issues.",
    ],
  ];

  pads.forEach((pad, index) => {
    pad.addEventListener("mousedown", function () {
      sounds[index].currentTime = 0;
      sounds[index].play();
      createText(index);
    });
  });

  pads.forEach((pad, index) => {
    pad.addEventListener("mouseleave", function () {
      sounds[index].pause();
    });
  });

  const createText = (index) => {
    visual.classList.add("center");
    visual.innerHTML = texts[index];
  };
});
