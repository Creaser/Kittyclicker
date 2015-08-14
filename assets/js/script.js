$(document).ready(function(){

    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'assets/sounds/cat5.mp3');

    var sound = true;

    var tmrKpSStart = setInterval(function () {
        tmrTick()
    },100);

    function tmrTick(){

        var test = 1;
        $('#KittysPerSec').text(test);
    };

    $('#toggleSound').click(function(){

        sound = !sound;

        if (sound)
        {
            $('#toggleSoundIcon').text('block');
            return;
        }

        $('#toggleSoundIcon').text('done');

    });


    $('#kittyIMG').click(function(){


        $(this).fadeOut(50);
        $(this).fadeIn(50);

        $('#KittysCurrent').html(function(i, val){
            return parseFloat(val*1.00+1.00)
        });

        if (sound == true)
        {
            audioElement.play();
        }

    });




    $('#ItemSoftHand').click(function(){

        itemSoftHand.increaseItem();



    });

    itemSoftHand = {
        kps: 0.1,
        baseCost : parseFloat('15'),
        current : Number($('ItemSoftHandCurrent').text()),
        purchasePrice: '',

        increaseItem: function(){
            if (Number($('#KittysCurrent').text()) >= $(this).purchasePrice)
            {
                this.current += 1
                $('#KittysCurrent').text(Number($('#KittysCurrent').text()) - this.purchasePrice) ;
            } else {
                console.log('zu wenig kittys');
            }

        },




    }



});

