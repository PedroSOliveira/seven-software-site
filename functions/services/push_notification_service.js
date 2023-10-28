module.exports = {
  sendDailyPushNotification,
};

const OneSignal = require("onesignal-node");
const onesignal_app_info = require("../keys/onesignal_app_info.json");
const client = new OneSignal.Client(
  onesignal_app_info.app_id,
  onesignal_app_info.api_key
);

const supportedLanguages = ["en"];

const notifications = {
  en: {
    headings: [
      "📝 Simulado ENEM",
      "✅ Aumente suas chances de aprovação",
      "Simulados completos!",
      "📝 Pratique agora!",
      "Aprimore seu conhecimento!",
      "Teste seu aprendizado!",
      "📝 Prepare-se para a prova!",
      "📝 Estude e seja aprovado!",
      "Simulados personalizados!",
      "📝 Revisão disponível!",
      "Domine toda as matérias!",
    ],
    contents: [
      "Aumente suas chances de aprovação.",
      "Prepare-se com as mais de 1000 questões.",
      "Reveja seus resultados.",
      "Fique por dentro das questões.",
      "Simulados anteriores disponíveis.",
      "Estude de forma eficiente.",
      "Estude de qualquer lugar.",
      "Pratique as questões de matemática.",
      "Treine para todas as matérias da prova.",
      "Pratique as questões de humanas.",
    ],
  },
};

async function sendDailyPushNotification() {
  const notification = {
    headings: generateHeadings(),
    contents: generateContents(),
    included_segments: ["Subscribed Users"],
    delayed_option: "last-active",
  };
  try {
    const response = await client.createNotification(notification);
    console.log("------daily notification sent successfully:\n", notification);
  } catch (e) {
    console.log("------Error sending daily notification:\n", e);
    if (e instanceof OneSignal.HTTPError) {
      // When status code of HTTP response is not 2xx, HTTPError is thrown.
      console.error(e.statusCode);
      console.error(e.body);
    }
  }
}

function generateHeadings() {
  let headings = {};
  for (let language of supportedLanguages) {
    let length = notifications[language].headings.length;
    let index = Math.floor(Math.random() * length);
    headings[language] = notifications[language].headings[index];
  }
  return headings;
}

function generateContents() {
  let contents = {};
  for (let language of supportedLanguages) {
    let length = notifications[language].contents.length;
    let index = Math.floor(Math.random() * length);
    contents[language] = notifications[language].contents[index];
  }
  return contents;
}
