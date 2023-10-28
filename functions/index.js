const functions = require("firebase-functions");
const {
  sendDailyPushNotification,
} = require("./services/push_notification_service");

const timeZone = "America/Sao_Paulo";
const pushNotificationTime = "05 11 * * *"; // 19:30 (minute hour dayMonth month dayWeek)

exports.dailyPushNotifications = functions.pubsub
  .schedule(pushNotificationTime)
  .timeZone(timeZone)
  .onRun(async (context) => {
    sendDailyPushNotification();
  });
