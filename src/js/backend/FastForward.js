/*
 * COPYRIGHT FastForward 5/19/2022
 * PROJECT: FastForward
 */
class FastForward {
    constructor(browser) {
        self.browser = browser;
        self.options = {
            bypassCounter: 0,
            enabled: true,
            instantNavigation: true,
            trackerBypassEnabled: true,
            instantNavigationTrackers: true,
            blockIPLoggers: true,
            crowdEnabled: true
        };
        self.definitions = {
            updateStatus: "",
            injectionScript: "",
            userScript: '',
            preflightRules: {},
            upstreamInjectionScript: "",
            upstreamCommit: null,
            channel: {},
            optionsTab: null,
            optionsPort: null,
            bypassClipboard: ""
        }
    }

    get manifest() {
        return self.browser.getManifest();
    }

    getUrl(url = '') {
        return self.browser.runtime.getURL(url);
    }
}

export default FastForward;
