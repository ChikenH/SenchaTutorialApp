/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'MyModernApp.Application',

    name: 'MyModernApp',

    requires: [
        // This will automatically load all classes in the MyModernApp namespace
        // so that application classes do not need to require each other.
        'MyModernApp.*'
    ],

    // The name of the initial view to create.
    mainView: 'MyModernApp.view.main.Main'
});
