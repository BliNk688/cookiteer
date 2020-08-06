
$("body").css("width", $(window).width()); 

(function () {
				function resizeBaseFontSize() {
					var rootHtml = document.documentElement,
						deviceWidth = rootHtml.clientWidth;
					if (deviceWidth > 992) {
						deviceWidth = 992;
					}
					rootHtml.style.fontSize = deviceWidth /9.92 + "px";
				}
				resizeBaseFontSize();
				window.addEventListener("resize", resizeBaseFontSize, false);
				window.addEventListener("orientationchange", resizeBaseFontSize, false);
			})();