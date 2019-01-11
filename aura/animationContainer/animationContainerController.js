({
    
    handleChange : function(component, event, helper) {
        component.set("v.thisSelection", event.getParam('value'));
        var toggleText = component.find("changeIt");
        $A.util.removeClass(toggleText, "toggle");        
    }, 
    
    noChange : function(component, event, helper) {
        var toggleText = component.find("changeIt");
        $A.util.toggleClass(toggleText, "toggle");
    },    
})