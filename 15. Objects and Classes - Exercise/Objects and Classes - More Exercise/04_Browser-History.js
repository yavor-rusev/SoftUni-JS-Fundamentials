function browserHistory(obj, stringArray) {
    for (let index = 0; index < stringArray.length; index++) {
        let actionString = stringArray[index];
        let actionStringAsArray = actionString.split(" ");
        let command = "";
        let siteName = "";

        if (actionStringAsArray[0] !== 'Clear') {
            command = actionStringAsArray[0];
            siteName = actionStringAsArray[1];

        } else if (actionString === "Clear History and Cache") {

            for (let property in obj) {

                if (property !== "Browser Name") {
                    while (obj[property].length > 0) {
                        obj[property].shift();
                    }

                }
            }
        }

        if (command === 'Open') {
            obj['Open Tabs'].push(siteName);
            obj['Browser Logs'].push(actionString);

        } else if (command === 'Close') {
            if (obj['Open Tabs'].includes(siteName)) {
                let searchedSiteIndex = obj['Open Tabs'].indexOf(siteName);
                let siteToClose = obj['Open Tabs'].splice(searchedSiteIndex, 1);

                obj['Recently Closed'].push(siteToClose);
                obj['Browser Logs'].push(actionString);
            }
        }
    }

    console.log(obj["Browser Name"]);
    console.log(`Open Tabs: ${obj['Open Tabs'].join(", ")}`);
    console.log(`Recently Closed: ${obj['Recently Closed'].join(", ")}`);
    console.log(`Browser Logs: ${obj['Browser Logs'].join(", ")}`);
}

browserHistory({
    "Browser Name": "Mozilla Firefox",
    "Open Tabs": ["YouTube"],
    "Recently Closed": ["Gmail", "Dropbox"],
    "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"
    ]
},
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
);