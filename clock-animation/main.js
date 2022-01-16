// Global scope
var clock = null
var mark = null
var digi = null
var bg = null
var hHand = null
var mHand = null
var sHand = null
var bgTop = null
var message = null

// Analog clock object
var cl = {
    
    // Get clock info and update screen
    clock: function() {
        var a = new Date()
        setTimeout(cl.clock, 1000 - a.getMilliseconds())
        cl.clockRotate(hHand, 360 * a.getHours() / 12)
        cl.clockRotate(mHand, 360 * a.getMinutes() / 60)
        cl.clockRotate(sHand, 360 * a.getSeconds() / 60)
    },
    
    // Rotate selected clock hand
    //   a = HTML ID
    //   b = int
    clockRotate: function(a, b) {
        a.style.transform = 'rotate(' + b + 'deg) translateY(-5vh)'
        a.style.webkitTransform = 'rotate(' + b + 'deg) translateY(-5vh)'
        a.style.msTransform = 'rotate(' + b + 'deg) translateY(-5vh)'
        a.style.mozTransform = 'rotate(' + b + 'deg) translateY(-5vh)'
        a.style.oTransform = 'rotate(' + b + 'deg) translateY(-5vh)'
    }, 
    // Storage
    data: 0,
    
    // Digits location storage
    digitsLocation: ['9.1vh, -18.5vh', '16.2vh, -11.4vh', '19vh, -1.75vh', '16.1vh, 8vh', '8.9vh, 15.1vh', '-.8vh, 17.7vh', '-10.7vh, 15.1vh', '-18vh, 8vh', '-20.8vh, -1.75vh', '-18.2vh, -11.1vh', '-11.2vh, -18.2vh', '-2vh, -21vh'],
    
    // Loading the analog clock
    load: function() {
        
        // Show clock frame
        clock.style.boxShadow = '0 0 0 2vh #fff, 0 0 2vh #000 inset'
        clock.style.height = '45vh'
        clock.style.width = '45vh'
        clock.style.transition = 'all 1s'
        clock.style.webkitTransition = 'all 1s'
        clock.style.msTransition = 'all 1s'
        clock.style.mozTransition = 'all 1s'
        clock.style.oTransition = 'all 1s'
        
        // Remove light box-shadow
        setTimeout(function() {
            clock.style.boxShadow = '0 0 0 2vh #494949, 0 0 2vh #000 inset'
        }, 600)
        
        // Remove 'transition' on clock frame
        setTimeout(function() {
            clock.style.transition = ''
            clock.style.webkitTransition = ''
            clock.style.msTransition = ''
            clock.style.mozTransition = ''
            clock.style.oTransition = ''
        }, 1400)
        
        // Create seconds marks
        for(var a = 0; a < 60; a++) {
            setTimeout(function() {
                if(cl.data % 5 !== 0) {
                    var e = document.createElement('div')
                    e.className = 'trans'
                    e.style.background = '#fff'
                    e.style.transform = 'rotate(' + (cl.data * 6) + 'deg) translateY(-21vh)'
                    e.style.webkitTransform = 'rotate(' + (cl.data * 6) + 'deg) translateY(-21vh)'
                    e.style.msTransform = 'rotate(' + (cl.data * 6) + 'deg) translateY(-21vh)'
                    e.style.mozTransform = 'rotate(' + (cl.data * 6) + 'deg) translateY(-21vh)'
                    e.style.oTransform = 'rotate(' + (cl.data * 6) + 'deg) translateY(-21vh)'
                    mark.appendChild(e)
                    
                    // Remove light background
                    setTimeout(function() {
                        e.style.background = ''
                    }, 100)
                }
                cl.data++
            }, 1400 + (25 * (a % 5 != 0 ? a : a - 1)))
        }
        
        // Create digit
        for(a = 0; a < 12; a++) {
            setTimeout(function() {
                var e = document.createElement('div')
                e.className = 'trans'
                e.innerText = cl.data - 59
                e.style.color = '#fff'
                e.style.transform = 'translate(' + cl.digitsLocation[cl.data - 60] + ')'
                e.style.webkitTransform = 'translate(' + cl.digitsLocation[cl.data - 60] + ')'
                e.style.msTransform = 'translate(' + cl.digitsLocation[cl.data - 60] + ')'
                e.style.mozTransform = 'translate(' + cl.digitsLocation[cl.data - 60] + ')'
                e.style.oTransform = 'translate(' + cl.digitsLocation[cl.data - 60] + ')'
                digi.appendChild(e)
                
                // Remove light color
                setTimeout(function() {
                    e.style.color = ''
                }, 100)
                cl.data++
            }, 2950 + (100 * a))
        }
        
        // Show background + top background
        setTimeout(function() {
            bg.className = 'trans'
            bg.style.background = '#fff'
        
            // Remove light background (bottom)
            setTimeout(function() {
                bg.style.background = ''
            }, 100)
            bgTop.className = 'trans'
            bgTop.style.background = '#fff'
        
            // Remove light background (top)
            setTimeout(function() {
                bgTop.style.background = ''
            }, 100)
            cl.clock()
        }, 4400)
        
        // Show hour hand
        setTimeout(function() {
            hHand.className = 'trans'
            hHand.style.background = '#fff'
        
            // Remove light background 
            setTimeout(function() {
                hHand.style.background = ''
            }, 100)
        }, 4700)
    
        // Show minute hand
        setTimeout(function() {
            mHand.className = 'trans'
            mHand.style.background = '#fff'
        
            // Remove light background
            setTimeout(function() {
                mHand.style.background = ''
            }, 100)
        }, 5000)
    
        // Show seconds hand
        setTimeout(function() {
            sHand.className = 'trans'
            sHand.style.background = '#fff'
        
            // Remove light background
            setTimeout(function() {
                sHand.style.background = ''
            }, 100)
        }, 5300)
        
        // Show message
        setTimeout(function() {
            message.style.right = 0
            
            // Hide message
            setTimeout(function() {
                message.style.right = ''
            }, 7500)
        }, 10000)
    }
}

// Event -> Web-page done loading
window.onload = function() {
    clock = document.getElementById('clock')
    mark = document.getElementById('mark')
    digi = document.getElementById('digi')
    bg = document.getElementById('bg')
    hHand = document.getElementById('hHand')
    mHand = document.getElementById('mHand')
    sHand = document.getElementById('sHand')
    bgTop = document.getElementById('bgTop')
    message = document.getElementById('message')
    cl.load()
}
