(function ($, Drupal, once) {
  Drupal.behaviors.gsbDataIndexThemeVersionSlider = {
    attach: function (context, settings) {
      once('gsbDataIndexThemeVersionSlider', '.field--name-field-versions', context).forEach(function (element) {
        // Do initial check to set visibility
        let $versionSelect = $('.version__select');
        console.log($versionSelect);
        gsb_data_index_theme_run_check($versionSelect);

        $versionSelect.on('change', function() {
          gsb_data_index_theme_run_check($(this));
        });
      });
    }
  };

  let gsb_data_index_theme_run_check = function($select) {
    let selectedVersion = $select.val();
    let $message = $('.field--name-field-versions .messages');
    if ($select.prop('selectedIndex')) {
      $message.show();
    }
    else {
      $message.hide();
    }
    $('.field--name-field-versions .version__row').hide();
    $('.version__row__' + selectedVersion).show();
  }
})(jQuery, Drupal, once);
