Hooks.once('ready', async function() {
    //CONFIG.debug.hooks=true
    //versionChangesPopup();
    //_addChatListeners();
        
    //config Audio to always
    game.settings.register("audioalwayson", "enableAlwaysMicrophone", {
        config: true,
        scope: "client",
        name: "AudioAlwaysOn",
        hint: "Sets Audio transmission to Always on",
        type: Boolean,
        default: true
    });
    foundry.applications.sidebar.tabs.ChatLog.NOTIFY_DURATION=20000


    let rtcconfiguration = Object.assign({}, game.settings.get("core", "rtcClientSettings"));
    if (rtcconfiguration != "always" && game.settings.get('audioalwayson', 'enableAlwaysMicrophone')){
        rtcconfiguration.voice.mode = "always";
        game.settings.set("core", "rtcClientSettings", rtcconfiguration);
    }
});