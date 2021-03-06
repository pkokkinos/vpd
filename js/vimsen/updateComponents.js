function updateComponents(applianceName, applianceValue) {

    //console.log("applianceName: " + applianceName + " applianceValue:"+applianceValue);

    var reState = /.*state[/]+(.*)+[/]state.*/;
    var reCommand = /.*command[/]+(.*)+[/]command.*/;
    //var reMac = /([a-zA-Z][0-9])([^/]*)/;
    var reMac = /[\/](.*?)\//;

    //get the macadress
    var macAddress = applianceName.match(reMac)[1];
    // console.log("updateComponents nmacAddress: " + macAddress);

    if (applianceName.search("state") != -1) {
        var newtextApplianceName = applianceName.replace(reState, "$1");
    }

    if (applianceName.search("command") != -1) {
        newtextApplianceName = applianceName.replace(reCommand, "$1");
    }
    // console.log("updateComponents new text: " + newtextApplianceName);

    //check if value from building item active inactive
    if (applianceValue.toUpperCase() === 'ACTIVE') {
        applianceValue = 'ON';
    }
    if (applianceValue.toUpperCase() === 'INACTIVE') {
        applianceValue = 'OFF';
    }

    //toggle swtich on or off depending the state
    var checked = applianceValue === 'OFF' ? true : false;
    //console.log("checked:"+checked);

    if(macAddress == "14060229CH10ABC" || macAddress == "14060229CH1ABC" || macAddress == "14060229CH8C" || macAddress == "14060229CH4B"
        || macAddress == "14060229CH2B"
        || macAddress == "14060229CH12A"
        || macAddress == "14060229CH7A"
        || macAddress == "14060229CH8A"
        || macAddress == "14060229CH7C"
        || macAddress == "14060229CH9C"
        || macAddress == "14060229CH9A"
        || macAddress == "14060229CH6A"
        || macAddress == "14060229CH4C"
        || macAddress == "14060229CH3A"
        || macAddress == "14060229CH3C"
        || macAddress == "14060229CH2A"
        || macAddress == "14060229CH2A"
        || macAddress == "14060229CH7B" || macAddress == "b827eb2a4503"
        ) {
        if (newtextApplianceName.search("energy_phaseA") != -1) {
            $("#" + macAddress + "meter1_energy").text(parseFloat(applianceValue).toFixed(4));
            sum = 0
            $('.meter1_energyClass').each(function() {
                sum += parseFloat($(this).text());
            });
            $("#meter1_energy").text(parseFloat(sum).toFixed(4));
        }
        else if (newtextApplianceName.search("energy_phaseB") != -1) {
            $("#" + macAddress + "meter2_energy").text(parseFloat(applianceValue).toFixed(4));
            sum = 0
            $('.meter2_energyClass').each(function() {
                sum += parseFloat($(this).text());
            });
            $("#meter2_energy").text(parseFloat(sum).toFixed(4));
        }
        else if (newtextApplianceName.search("energy_phaseC") != -1) {
            $("#" + macAddress + "meter3_energy").text(parseFloat(applianceValue).toFixed(4));
            sum = 0
            $('.meter3_energyClass').each(function() {
                sum += parseFloat($(this).text());
            });
            $("#meter3_energy").text(parseFloat(sum).toFixed(4));
        }
        else if (newtextApplianceName.search("power_phaseA") != -1) {
            $("#" + macAddress + "power_valueA").text(parseFloat(applianceValue).toFixed(4));
            sum = 0;
            $('.meter1_powerClass').each(function() {
            sum += parseFloat($(this).text());
            });
            $("#meter1_power").text(sum);
        }
        else if (newtextApplianceName.search("power_phaseB") != -1) {
            $("#" + macAddress + "power_valueB").text(parseFloat(applianceValue).toFixed(4));
            sum = 0;
            $('.meter2_powerClass').each(function() {
            sum += parseFloat($(this).text());
            });
            $("#meter2_power").text(sum);
        }
        else if (newtextApplianceName.search("power_phaseC") != -1) {
            $("#" + macAddress + "power_valueC").text(parseFloat(applianceValue).toFixed(4));
            sum = 0;
            $('.meter3_powerClass').each(function() {
            sum += parseFloat($(this).text());
            });
            $("#meter3_power").text(sum);
        }
        else if (newtextApplianceName.search("total_energy_consumption_300") != -1) {
            if (parseFloat($("#" + macAddress + "_totalEnergy").text()) == 0) {
                $("#" + macAddress + "_totalEnergy").text(parseFloat(applianceValue).toFixed(4));
                $("#" + macAddress + "meter1_energy").text(parseFloat(applianceValue).toFixed(4));
            }
        }
        else if (newtextApplianceName.search("active_power_total") != -1) {
            if (parseFloat($("#" + macAddress + "_power_total").text()) == 0) {
                $("#" + macAddress + "_power_total").text(parseFloat(applianceValue).toFixed(4));
                $("#" + macAddress + "power_valueA").text(parseFloat(applianceValue).toFixed(4));
            }
        }
        

        if (parseFloat($("#" + macAddress + "meter1_energy").text()) !=0 || parseFloat($("#" + macAddress + "meter2_energy").text()) !=0 || parseFloat($("#" + macAddress + "meter3_energy").text()) !=0) {
            $("#" + macAddress + "_totalEnergy").text((parseFloat($("#" + macAddress + "meter1_energy").text()) + parseFloat($("#" + macAddress + "meter2_energy").text()) + parseFloat($("#" + macAddress + "meter3_energy").text())).toFixed(4));
        }
        if (parseFloat($("#" + macAddress + "power_valueA").text()) !=0 || parseFloat($("#" + macAddress + "power_valueB").text()) !=0 || parseFloat($("#" + macAddress + "power_valueC").text()) !=0) {
            $("#" + macAddress + "_power_total").text((parseFloat($("#" + macAddress + "power_valueA").text()) + parseFloat($("#" + macAddress + "power_valueB").text()) + parseFloat($("#" + macAddress + "power_valueC").text())).toFixed(4));
        }   

         if(newtextApplianceName.search("production_power") != -1) {    
            $("#" + macAddress + "_totalPowerProduction").text((parseFloat(applianceValue)).toFixed(4));
        }
 
    }
    //else if (macAddress == "b827eb2a4503") {
    //    console.log("fuck: " + newtextApplianceName + applianceValue)
    //}
    else if(macAddress == "MD1251ABC1458813130520.72" || macAddress == "generaleluciesterne2ABC1458813156839.97" ) {
        console.log(macAddress, newtextApplianceName, applianceValue);
        if (newtextApplianceName.search("energy_phaseA") != -1) {
            $("#" + macAddress + "meter1_energy").text(parseFloat(applianceValue).toFixed(4));
            sum = 0
            $('.meter1_energyClass').each(function() {
                sum += parseFloat($(this).text());
            });
            $("#meter1_energy").text(parseFloat(sum).toFixed(4));
        }
        else if (newtextApplianceName.search("energy_phaseB") != -1) {

            $("#" + macAddress + "meter2_energy").text(parseFloat(applianceValue).toFixed(4));

            sum = 0
            $('.meter2_energyClass').each(function() {
                sum += parseFloat($(this).text());
            });
            $("#meter2_energy").text(parseFloat(sum).toFixed(4));
        }
        else if (newtextApplianceName.search("energy_phaseC") != -1) {
            $("#" + macAddress + "meter3_energy").text(parseFloat(applianceValue).toFixed(4));
            sum = 0
            $('.meter3_energyClass').each(function() {
                sum += parseFloat($(this).text());
            });
            $("#meter3_energy").text(parseFloat(sum).toFixed(4));
        }

        // Short of a special case for hedno with the topic total_energy_consumption_300
        if (newtextApplianceName.search("total_energy_consumption_300") != -1) {
            console.log(macAddress, newtextApplianceName, applianceValue)
            $("#"+ macAddress + "meter1_energy").text(parseFloat(applianceValue).toFixed(4));    
        }
    }
    else if (newtextApplianceName.search("production") != -1) {

        if (newtextApplianceName == "PV1_production_power" && macAddress == "b827ebf9b703") {
            newtextApplianceName = "PVTelint_production_power";
        }
        // $("#"+newtextApplianceName+'_power').text(applianceValue);
        //we should update production percentage TODO
        //update battery chart
        if(newtextApplianceName.search("production_energy") != -1) {    
            $("#" + macAddress + "_totalEnergyProduction").text((parseFloat(applianceValue)).toFixed(4));
        }

        if(newtextApplianceName.search("production_power") != -1) {    
            $("#" + macAddress + "_totalPowerProduction").text((parseFloat(applianceValue)).toFixed(4));
        }

        if ($("#" + newtextApplianceName + macAddress).length > 0) {
            // console.log("update production::"+newtextApplianceName);

            //update battery pie chart!!
            if (newtextApplianceName.search("battery") != -1) {
                // console.log("update battery::"+newtextApplianceName+macAddress+" value:"+applianceValue);
                $("#" + newtextApplianceName + macAddress).text(parseFloat(applianceValue).toFixed(0));
                $("#" + newtextApplianceName + "_pie" + macAddress).data('easyPieChart').update(applianceValue);
            } else {

                //$("#" + newtextApplianceName + macAddress).text((parseFloat(applianceValue) * 1000).toFixed(4));
                $("#" + newtextApplianceName + macAddress).text((parseFloat(applianceValue) ).toFixed(4));

                //UPDATE PRODUCTION PIE CHART
                //update production meterX totals
                //update totalpowerproduction
                var sum = 0;
                //get all values for class 
                $('.' + macAddress + '_powerValue').each(function() {
                    // console.log("$(this) here:"+this.id);
                    sum += parseFloat($(this).text());
                });
                // console.log("ID::"+newtextApplianceName+"sum:"+sum);
                //put new sum value
                //$("#" + macAddress + "_totalPowerProduction").text((parseFloat(sum) / 1000).toFixed(4));
                $("#" + macAddress + "_totalPowerProduction").text((parseFloat(sum)).toFixed(4));

                //update total production
                var totalProduction = 0;
                //get all values for class 
                // console.log("totalProduction:"+totalProduction);
                $('.productionPower').each(function() {
                    // console.log("$(this) here:"+this.id);
                    totalProduction += parseFloat($(this).text());
                });
                $("#totalPowerProduction").text((totalProduction).toFixed(4));
                //end update totalpowerproduction
                //update pie charts inside appliance widget
                var percentage = 100 * (parseFloat(applianceValue).toFixed(0) / parseFloat($("#totalPowerProduction").text()).toFixed(0));

                $("#" + newtextApplianceName + "_percent" + macAddress).text(parseInt(percentage).toFixed(0));
                if ($("#" + newtextApplianceName + "_percent" + macAddress).length > 0) {
                    //console.log("percentage()::"+ newtextApplianceName );
                    //update pie chart for production!!
                    $("#" + newtextApplianceName + "_pie_percent" + macAddress).data('easyPieChart').update(percentage);
                }
                //END UPDATE PIE CHART

                // All the following code it is just to handle a special case for hedno production appliances where the production values 
                // are retained in mqtt and a result the calculated production values of the first parsed appliances are not calculated correclty
                // since the totalpowerproduction value is not yet correct. However, this will also work even in other VPs and event if the 
                // retained issue does not exist.
                $('.percent_appliance_production').each(function() {
                    var text = this.id;
                    var tmp_id = text.replace("_percent", "");
                    //console.log($("#"+tmp_arr).text());
                    var percentage = 100 * (parseFloat($("#" + tmp_id).text()).toFixed(0) / parseFloat(1000 * $("#totalPowerProduction").text()).toFixed(0));
                    $($("#" + this.id)).text(percentage.toFixed(0));
                });

            }
        }

    } else if (newtextApplianceName.search("_active_power_") != -1 && newtextApplianceName.search("phase") != -1) {
        //console.log("active power::" + newtextApplianceName + " value::" + applianceValue);
        // $("#"+newtextApplianceName+'_power').text(applianceValue);
        //we should update production percentage TODO
        //update battery chart
        //make value in KW ecept total power
        // if(newtextApplianceName.search("GPXT") ===-1){
        applianceValue = 1000 * applianceValue;
        // }

        $("#" + newtextApplianceName).text(parseFloat(applianceValue).toFixed(4));

        // 
        //update meterX  & totals
        // 

        var sum = 0;
        var phase = '';
        var appliancename = '';
        if (newtextApplianceName.search("phaseA") != -1) {
            phase = 'power_valueA';
            appliancename = newtextApplianceName.replace("phaseA", "");
        } else if (newtextApplianceName.search("phaseB") != -1) {
            phase = 'power_valueB';
            appliancename = newtextApplianceName.replace("phaseB", "");
        } else if (newtextApplianceName.search("phaseC") != -1) {
            phase = 'power_valueC';
            appliancename = newtextApplianceName.replace("phaseC", "");
        }

        //get all values for class eg meter1_powerClass
        sum = 0;
        if (newtextApplianceName.search("phase") != -1) {
            $('.' + phase).each(function() {
                sum += parseFloat($(this).text() / 1000);
            });
        }

        //put new sum value
        $("#" + macAddress + phase).text(parseFloat(sum).toFixed(4));
        $("#" + macAddress + "_power_total").text((parseFloat($("#" + macAddress + "power_valueA").text()) + parseFloat($("#" + macAddress + "power_valueB").text()) + parseFloat($("#" + macAddress + "power_valueC").text())).toFixed(4));
        $("#" + appliancename + "total" + macAddress).text((parseFloat($("#" + appliancename + "phaseA").text()) + parseFloat($("#" + appliancename + "phaseB").text()) + parseFloat($("#" + appliancename + "phaseC").text())).toFixed(4));

        // update VP's power
        sum = 0;
        if (newtextApplianceName.search("phaseA") != -1) {
            $('.meter1_powerClass').each(function() {
                sum += parseFloat($(this).text());
            });
            $("#meter1_power").text(sum);
        } else if (newtextApplianceName.search("phaseB") != -1) {
            $('.meter2_powerClass').each(function() {
                sum += parseFloat($(this).text());
            });
            $("#meter2_power").text(sum);
        } else if (newtextApplianceName.search("phaseC") != -1) {
            $('.meter3_powerClass').each(function() {
                sum += parseFloat($(this).text());
            });
            $("#meter3_power").text(sum);
        }

        //update pie charts inside appliance widget
        var percentage = 100 * (parseFloat($("#" + appliancename + "total" + macAddress).text()).toFixed(4) / (1000 * parseFloat($("#totalPower").text()).toFixed(4)));
        if ($("#" + appliancename + "total_percent" + macAddress).length > 0) {
            // console.log("percentage()::"+ element.name );
            //update pie chart!!
            $("#" + appliancename + "total_pie_percent" + macAddress).data('easyPieChart').update(percentage);
        }

        //_active_power_total_percent
        $("#" + appliancename + "total_percent" + macAddress).text(parseInt(percentage).toFixed(0));

    } else {
        //update attributes
        $("#" + newtextApplianceName + macAddress).text(applianceValue);
        $("#" + macAddress + newtextApplianceName).text(parseFloat(applianceValue).toFixed(4));

        //$("#"+macAddress+'_'+newtextApplianceName).text(applianceValue);
        $('#ts-' + newtextApplianceName + '').prop('checked', checked);
        $("#" + newtextApplianceName + '_state').text(applianceValue);
        $('#ts-' + macAddress + newtextApplianceName + '').prop('checked', checked);
        $("#" + macAddress + newtextApplianceName + '_state').text(applianceValue);
        
        //update pie charts inside appliance widget
        var percentage = 0.1 * (parseFloat(applianceValue).toFixed(4) / parseFloat($("#totalPower").text()).toFixed(4));

        // console.log("UPDATED percentage new()::"+parseFloat(applianceValue).toFixed(4) );  
        // console.log("UPDATED percentage tp()::"+parseFloat($("#totalPower").text()).toFixed(4));          
        $("#" + newtextApplianceName + "_percent" + macAddress).text(parseInt(percentage).toFixed(0));
        if ($("#" + newtextApplianceName + "_percent" + macAddress).length > 0) {
            // console.log("percentage()::"+ newtextApplianceName );
            //update pie chart for consumption devices!!
            $("#" + newtextApplianceName + "_pie_percent" + macAddress).data('easyPieChart').update(percentage);
        }

                //console.log("update fibaro::"+newtextApplianceName+"-"+macAddress+" value:"+applianceValue);
        // update VP's power
        sum = 0;
        if (newtextApplianceName.search("meter1_power") != -1) {
            $('.vgw_power_valueA').each(function() {
                sum += parseFloat($(this).text());
            });
            $('.meter1_powerClass').each(function() {
                sum += parseFloat($(this).text());
            });
            $("#"+ macAddress + "power_valueA").text(parseFloat(applianceValue).toFixed(4));
            $("#meter1_power").text(parseFloat(sum).toFixed(4));
        } else if (newtextApplianceName.search("meter2_power") != -1) {
            $('.vgw_power_valueB').each(function() {
                sum += parseFloat($(this).text());
            });
            $('.meter2_powerClass').each(function() {
                sum += parseFloat($(this).text());
            });
            $("#"+ macAddress + "power_valueB").text(parseFloat(applianceValue).toFixed(4));
            $("#meter2_power").text(parseFloat(sum).toFixed(4));
        } else if (newtextApplianceName.search("meter3_power") != -1) {
            $('.vgw_power_valueC').each(function() {
                sum += parseFloat($(this).text());
            });
            $('.meter3_powerClass').each(function() {
                sum += parseFloat($(this).text());
            });
            $("#"+ macAddress + "power_valueC").text(parseFloat(applianceValue).toFixed(4));
            $("#meter3_power").text(parseFloat(sum).toFixed(4));
        }
        
        // Short of a special case for hedno with the topic total_energy_consumption_300
        if (newtextApplianceName.search("total_energy_consumption_300") != -1) {
            $("#"+ macAddress + "meter1_energy").text(parseFloat(applianceValue).toFixed(4));    
        }

       // update VP's energy
        sum = 0;
        if (newtextApplianceName.search("meter1_energy") != -1 || newtextApplianceName.search("total_energy_consumption_300") != -1) {
            $('.meter1_energyClass').each(function() {
                sum += parseFloat($(this).text());
            });
            $("#meter1_energy").text(parseFloat(sum).toFixed(4));
        } else if (newtextApplianceName.search("meter2_energy") != -1) {
             $('.meter2_energyClass').each(function() {
                sum += parseFloat($(this).text());
            });
            $("#meter2_energy").text(parseFloat(sum).toFixed(4));
        } else if (newtextApplianceName.search("meter3_energy") != -1) {
             $('.meter3_energyClass').each(function() {
                sum += parseFloat($(this).text());
            });
            $("#meter3_energy").text(parseFloat(sum).toFixed(4));
        }

        $("#" + macAddress + "_totalPower").text((parseFloat($("#" + macAddress + "meter1_power").text()) + parseFloat($("#" + macAddress + "meter2_power").text()) + parseFloat($("#" + macAddress + "meter3_power").text())).toFixed(4));
        $("#" + macAddress + "_power_total").text((parseFloat($("#" + macAddress + "power_valueA").text()) + parseFloat($("#" + macAddress + "power_valueB").text()) + parseFloat($("#" + macAddress + "power_valueC").text())).toFixed(4));
        $("#" + macAddress + "_totalEnergy").text((parseFloat($("#" + macAddress + "meter1_energy").text()) + parseFloat($("#" + macAddress + "meter2_energy").text()) + parseFloat($("#" + macAddress + "meter3_energy").text())).toFixed(4));

        if(newtextApplianceName == "total_power" || newtextApplianceName == "meter1_power" || newtextApplianceName == "meter2_power" || newtextApplianceName == "meter3_power") {
            if (parseFloat($("#" + macAddress + "_power_total").text()) == 0) {
                $("#" + macAddress + "_power_total").text(parseFloat(applianceValue).toFixed(4));
            }
        }

    }
    //add to chart
    //var chart = $('#containerHighcharts').highcharts();
    // series = chart.get(newtextApplianceName);
    // console.log("series::"+series);
    // Add point
    // if(series!=null){
    // var time = (new Date()).getTime();
    // series.addPoint([time, parseFloat(applianceValue)]);
    // }

    // //add power and energy
    // if (newtextApplianceName.search("meter") != -1) {
    //     console.log("meter::"+newtextApplianceName+macAddress+" value:"+applianceValue);
    //     //for power in KW
    //     if (newtextApplianceName.search("power") != -1) {
    //         $("#" + macAddress + newtextApplianceName).text((parseFloat(applianceValue) / 1000).toFixed(4));
    //     } else {
    //         //for energy kWh
    //         $("#" + macAddress + newtextApplianceName).text((parseFloat(applianceValue)).toFixed(4));
    //     }

    //     //update totals for each appliance
    //     $("#" + macAddress + "_totalPower").text((parseFloat($("#" + macAddress + "meter1_power").text()) + parseFloat($("#" + macAddress + "meter2_power").text()) + parseFloat($("#" + macAddress + "meter3_power").text())).toFixed(4));
    //     $("#" + macAddress + "_totalEnergy").text((parseFloat($("#" + macAddress + "meter1_energy").text()) + parseFloat($("#" + macAddress + "meter2_energy").text()) + parseFloat($("#" + macAddress + "meter3_energy").text())).toFixed(4));

    //     //update meterX totals
    //     var sum = 0;
    //     //get all values for class eg meter1_powerClass
    //     $('.' + newtextApplianceName + 'Class').each(function() {
    //         sum += parseFloat($(this).text());
    //     });

    //     // console.log("ID::"+newtextApplianceName+"sum:"+sum);
    //     //put new sum value
    //     $("#" + newtextApplianceName).text(parseFloat(sum).toFixed(4));
    // }

    //update totals
    var totalProduction = 0;
    //get all values for class 
    // console.log("totalProduction:"+totalProduction);
    $('.productionPower').each(function() {
        // console.log("$(this) here:"+this.id);
        totalProduction += parseFloat($(this).text());
    });
    $("#totalPowerProduction").text((totalProduction).toFixed(4));
    $("#totalPower").text((parseFloat($("#meter1_power").text()) + parseFloat($("#meter2_power").text()) + parseFloat($("#meter3_power").text())).toFixed(4));
    $("#totalEnergy").text((parseFloat($("#meter1_energy").text()) + parseFloat($("#meter2_energy").text()) + parseFloat($("#meter3_energy").text())).toFixed(4));
}

//check event on toggle switch for ON OFF
$('body').on('change', '.toggle-switch input:checkbox', function() {
    var id = event.target.id;
    var dr = event.target.getAttribute("dr");
    var item = event.target.getAttribute("item");
    //console.log("id:" + event.target.id);
    //console.log("dr:" + event.target.getAttribute("dr"));
    //console.log("item:" + event.target.getAttribute("item"));

    if (dr != null & item != null) {
        //remove ts- to get the name of the appliance
        var applianceName = id.substring(3);
        var drUrl = dr;
        var itemType = item;
        var ip = event.target.getAttribute("ip");

        drUrlArr = drUrl.split("/");
        applianceName = applianceName.replace(drUrlArr[1],"");
        //console.log(drUrl + "-" + applianceName);
        //console.log("checked" + $(this).is(':checked'));
        //if check is true turn OFF
        if ($(this).is(':checked')) {

            var applianceValue = 'OFF';
            //console.log("checked:"+checked);
            $("#" + drUrlArr[1] + applianceName + '_state').text(applianceValue);
            //send request
            //THIS must be changes with broker path
            // $.get(drUrl+":8888/CMD?"+applianceName+"=OFF&__async=true");
            // $.get("http://192.168.1.16:8888/CMD?"+applianceName+"=OFF&__async=true");

            //publish command on off to broker
            //check if buildintitem switch
            //if (itemType.toUpperCase() === 'BUILDINGITEMSWITCH') {
            if (applianceName.search("HVAC") !=  -1) {
                publish(ip + ' ' + applianceName + ' active', drUrl, 0);
            } else if (applianceName.search("Actuation") !=  -1) {
                //drUrlNew = drUrl.replace("LDRcommand","SB1_Phase1/command");
                publish('Phase1 OFF', drUrl, 0);
            }
            else {
                publish(applianceName + ' OFF', drUrl, 0);
            }

        } else {
            //turn on
            var applianceValue = 'ON';
            //console.log("checked:"+checked);
            //THIS must be changes with broker path
            // $.get(drUrl+":8888/CMD?"+applianceName+"=ON&__async=true");
            // $.get("http://192.168.1.16:8888/CMD?"+applianceName+"=ON&__async=true");

            //publish command on off to broker
            //check if buildintitem switch
            if (applianceName.search("HVAC") !=  -1) {
            //if (itemType.toUpperCase() === 'BUILDINGITEMSWITCH') {
                publish(ip + ' ' + applianceName + ' inactive', drUrl, 0);
            } else if (applianceName.search("Actuation") !=  -1) {
                //drUrlNew = drUrl.replace("LDRcommand","Phase1/command");
                publish('Phase1 ON', drUrl, 0);                
            } else {
                publish(applianceName + ' ON', drUrl, 0);
            }

            $("#" + drUrlArr[1] + applianceName + '_state').text(applianceValue);
        }
    }
});