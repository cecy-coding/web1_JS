        var Links = {
            setColor:function(color){
               // var alist = document.querySelectorAll('a');
               //  var i = 0;
               //  while (i < alist.length) {
               //      alist[i].style.color = color;
               //      i = i + 1;
               //  }
                $('a').css('color',color);
            }
        }

        var Body = {
            setColor:function(color){
                 // document.querySelector('body').style.color = color;
                $('body').css('color', color);
            },
            setBackgroundColor:function(color) {
                // document.querySelector('body').style.backgroundColor = color;
                $('body').css('backgroundColor', color);
            }
        }

        function nightDayHandler (self) {     // self라는 parameter 지정, 변화가능
            var target = document.querySelector('body');
            if (self.value === 'night') {
                Body.setBackgroundColor('black');
                Body.setColor('white');
                self.value = 'day';

                Links.setColor('powderblue');
                // setColor로 묶은 부분1
                // var alist = document.querySelectorAll('a');
                // var i = 0;
                // while (i < alist.length) {
                //     alist[i].style.color = 'powderblue';
                //     i = i + 1;
                // }

            } else {
                Body.setBackgroundColor('white');
                Body.setColor('black');
                self.value = 'night';

                Links.setColor('blue');
                // setColor로 묶은 부분2
                // var alist = document.querySelectorAll('a');
                // var i = 0;
                // while (i < alist.length) {
                //     alist[i].style.color = 'blue';
                //     i = i + 1;
                // }
            }
        }