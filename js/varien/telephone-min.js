var telephoneElem=Class.create();telephoneElem.prototype={initialize:function(b,a,e,d,c){this.valField=b;this.f1=a;this.f2=e;this.f3=d;this.f4=c;this.last=d;this.eventKeyPress=this.keyPress.bindAsEventListener(this);this.eventKeyUp=this.keyUp.bindAsEventListener(this);Event.observe(this.f1,"keyup",this.eventKeyUp);Event.observe(this.f2,"keyup",this.eventKeyUp);Event.observe(this.f3,"keyup",this.eventKeyUp);Event.observe(this.f1,"keypress",this.eventKeyPress);Event.observe(this.f2,"keypress",this.eventKeyPress);Event.observe(this.f3,"keypress",this.eventKeyPress);if(this.f4){Event.observe(this.f4,"keyup",this.eventKeyUp);Event.observe(this.f4,"keypress",this.eventKeyPress);this.last=c}this.loadValues()},keyPress:function(b){var a=b.keyCode},keyUp:function(d){var b=Event.element(d);var c=d.keyCode;if(b.id!=this.last&&c!=Event.KEY_TAB&&c!=16&&c!=Event.KEY_BACKSPACE&&c!=Event.KEY_DELETE&&c!=Event.KEY_LEFT&&c!=Event.KEY_RIGHT){var a=b.size;if(b.value.length==a){if(nextElem=this.getNextElement(b.id)){Field.activate(nextElem)}}}this.setValField()},getNextElement:function(a){if(a==this.last){return false}if(a==this.f1){return this.f2}if(a==this.f2){return this.f3}if(a==this.f3){return this.f4}return false},setValField:function(){cur_value="";if($F(this.f1)){cur_value+="("+$F(this.f1)+") "}if($F(this.f2)){cur_value+=$F(this.f2)}if($F(this.f3)){cur_value+="-"+$F(this.f3)}if(this.f4){cur_value+=$F(this.f4)?"-"+$F(this.f4):""}$(this.valField).value=cur_value},loadValues:function(){var a=$F(this.valField);if(a&&a.length){re=/^[\(]?(\d{3})[\)]?[-|\s]?(\d{3})[-|\s](\d{4})[-|\s]?(\d{0,4})?$/;if(re.test(a)){arrVal=re.exec(a);$(this.f1).value=arrVal[1];$(this.f2).value=arrVal[2];$(this.f3).value=arrVal[3];if(this.f4&&arrVal[4]){$(this.f4).value=arrVal[4]}}}}};