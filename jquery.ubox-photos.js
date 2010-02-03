(function($){
    $.ubox_photos = {};
    $.ubox_photos.options =
    {
        target: "#ubox-photo",
        delay: 0
    };
    var options = $.ubox_photos.options;
    var self = $.ubox_photos;
    $.extend($.ubox_photos,
    {
        $popup: null,
        current: {
            image: ''
        },
        _init: function()
        {
            $("a[rel~=ubox-photo]").live('click', function()
            {
                // Set the current state
                self.current.image = $(this).attr("href");

                // Duplicate the template and replace
                var $template = $(options.target).clone();
                self.$popup = $template;
				$.ubox.show(self.$popup, { 'on_popup': self._onPopup, 'on_resize': self._onResize });
				$(this).blur(); // Remove focus from the link
                return false;
            });
        },
        _onResize: function()
        {
            $("#ubox-photo").removeClass("resizing").addClass("done");
        },
        _onPopup: function($link)
        {
            var $photo = self.$popup.find("img._photo");
            $photo.load(function() {
                window.setTimeout(function()
                {
                    // Measure the final dimensions
                    var $el = $('.ubox-content');
                    $("#ubox-photo").removeClass("loading");
                    var o = { 'width': $el.outerWidth(), 'height': $el.outerHeight() };
                    $("#ubox-photo").addClass("loading");

                    // Resize to it
                    $.ubox.resize(o.width, o.height);
                    $("#ubox-photo").removeClass("loading").addClass("resizing");
                }, self.options.delay );
            });
            $photo.attr("src", self.current.image);
        }
    });
    $(function() { $.ubox_photos._init(); });
})(jQuery);
