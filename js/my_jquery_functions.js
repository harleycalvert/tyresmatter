    $(document).ready(function() {
        $("#curbweightdisplay").click(function() {
            $("#curbweightinfo").toggle(1000);
        });
        $("#hidecurbweightinfo").click(function() {
            $("#curbweightinfo").hide(1000);
        });
    });

    $(document).ready(function() {
        $("#loaddisplay").click(function() {
            $("#loadinfo").toggle(1000);
        });
        $("#hideloadinfo").click(function() {
            $("#loadinfo").hide(1000);
        });
    });

    $(document).ready(function() {
        $("#maxLoaddisplay").click(function() {
            $("#maxLoadinfo").toggle(1000);
        });
        $("#hidemaxLoadinfo").click(function() {
            $("#maxLoadinfo").hide(1000);
        });
    });

    $(document).ready(function() {
        $("#maxPressuredisplay").click(function() {
            $("#maxPressureinfo").toggle(1000);
        });
        $("#hidemaxPressureinfo").click(function() {
            $("#maxPressureinfo").hide(1000);
        });
    });

    $(document).ready(function() {
        $("#pressuredisplay").click(function() {
            $("#pressureinfo").toggle(1000);
        });
        $("#hidepressureinfo").click(function() {
            $("#pressureinfo").hide(1000);
        });
    });


    $(document).ready(function() {
        $("#daysdisplay").click(function() {
            $("#daysinfo").toggle(1000);
        });
        $("#hidedaysinfo").click(function() {
            $("#daysinfo").hide(1000);
        });
    });

    $(document).ready(function() {
        $("#startTemperaturedisplay").click(function() {
            $("#startTemperatureinfo").toggle(1000);
        });
        $("#hidestartTemperatureinfo").click(function() {
            $("#startTemperatureinfo").hide(1000);
        });
    });

    $(document).ready(function() {
        $("#endTemperaturedisplay").click(function() {
            $("#endTemperatureinfo").toggle(1000);
        });
        $("#hideendTemperatureinfo").click(function() {
            $("#endTemperatureinfo").hide(1000);
        });
    });

    $(document).ready(function() {
        $("#startAltitudedisplay").click(function() {
            $("#startAltitudeinfo").toggle(1000);
        });
        $("#hidestartAltitudeinfo").click(function() {
            $("#startAltitudeinfo").hide(1000);
        });
    });

    $(document).ready(function() {
        $("#endAltitudedisplay").click(function() {
            $("#endAltitudeinfo").toggle(1000);
        });
        $("#hideendAltitudeinfo").click(function() {
            $("#endAltitudeinfo").hide(1000);
        });
    });

    //menu


    //introduction
    $(document).ready(function() {
        $("#introductionmenu").click(function() {
            $("#introductiondisplay").slideToggle();
        });
    });
    //inflation pressure

    $(document).ready(function() {
        $("#initialPressuremenu").click(function() {
            $("#initialPressuredisplay").slideToggle();
        });
    });

    //pessure change
    $(document).ready(function() {
        $("#pressureChangemenu").click(function() {
            $("#pressureChangedisplay").slideToggle();
        });
    });
    //technical
    $(document).ready(function() {
        $("#technicalmenu").click(function() {
            $("#technicaldisplay").slideToggle();
        });
    });

    //result
    $(document).ready(function() {
        $("#resultmenu").click(function() {
            $("#resultdisplay").slideToggle();
        });
    });

    //updates
    $(document).ready(function() {
        $("#updatesmenu").click(function() {
            $("#updatesdisplay").slideToggle();
        });
    });
    //contact
    $(document).ready(function() {
        $("#contactmenu").click(function() {
            $("#contactdisplay").slideToggle();
        });
    });

    //Validation for the forms
    $(function() {
        $('#initialPresureForm').validate({

            rules: {
                curbWeight: {
                    required: true,
                },
                load: {
                    required: true,
                },
                maxLoad: {
                    required: true,
                },
                maxPressure: {
                    required: true,
                }
            },
            messages: {
                curbWeight: {
                    required: "<i>Vehicle Weight With No Cargo</i> is required!"
                },
                load: {
                    required: "<i>Cargo Weight When Inflating Tyres</i> is required!"
                },
                maxLoad: {
                    required: "<i>Maximum Cargo Weight</i> is required!"
                },
                maxPressure: {
                    required: "<i>Maximum Pressure</i> is required!"
                }
            },
            errorContainer: $('#errorContainer'),
            errorLabelContainer: $('#errorContainer ul'),
            wrapper: 'li'


        });

    });


    $(function() {
        $('#pressureChangeForm').validate({

            rules: {
                pressure: {
                    required: true
                },
                days: {
                    required: true
                },
                startTemperature: {
                    required: {
                        depends: function() {
                            return $('#includeTemperature').is(':checked')
                        }
                    }
                },
                endTemperature: {
                    required: {
                        depends: function() {
                            return $('#includeTemperature').is(':checked')
                        }
                    }
                },
                startAltitude: {
                    required: {
                        depends: function() {
                            return $('#includeAltitude').is(':checked')
                        }
                    }
                },
                endAltitude: {
                    required: {
                        depends: function() {
                            return $('#includeAltitude').is(':checked')
                        }
                    }
                }


            },
            messages: {
                pressure: {
                    required: "<i>Starting Pressure</i> is required!"
                },
                days: {
                    required: "<i>Days Between Tyre Check</i> is required!"
                },
                startTemperature: {
                    required: "<i>Starting Temperature</i> is required!"
                },
                endTemperature: {
                    required: "<i>Ending Temperature</i> is required!"
                },
                startAltitude: {
                    required: "<i>Starting Altitude</i> is required!"
                },
                endAltitude: {
                    required: "<i>Ending Altitude</i> is required!"
                }
            },
            errorContainer: $('#errorContainer1'),
            errorLabelContainer: $('#errorContainer1 ul'),
            wrapper: 'li'


        });

    });


        $(function() {
        $('#contactus').validate({

            rules: {
                u_name: {
                    required: true
                },
                u_email: {
                    required: true
                },
                subj: {
                    required: true
                },
                message: {
                    required: true
                }
            },
            messages: {
                u_name: {
                    required: "<i>Name</i> is required!"
                },
                u_email: {
                    required: "<i>Email</i> is required!"
                },
                subj: {
                    required: "<i>Subject</i> is required!"
                },
                message: {
                    required: "<i>Message</i> is required!"
                }
            },
            errorContainer: $('#errorContainer2'),
            errorLabelContainer: $('#errorContainer2 ul'),
            wrapper: 'li'


        });

    });

    $(document).ready(function() {
        $(":reset");
    });