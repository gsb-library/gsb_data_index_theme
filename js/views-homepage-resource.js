(function ($, Drupal, once) {
  Drupal.behaviors.viewsHomepageResourceCustomActions = {
    attach: function (context, settings) {
      // Ensure the script runs only on the targeted view.
      let isRan = $('.view-id-homepage_resource.view-display-id-listing').attr('data-js-is-ran');
      if (!isRan) {
        $('button.dataset-filter-button').each(function() {

          let $this = $(this);
          $this.on("click", function(e) {
            e.preventDefault();
            let $tagElement = $(this);
            let filterType = $tagElement.data("filter-id");
            let filterKey = $tagElement.data("item-key");

            let $checkbox = $('input[name="' + filterType + '[' + filterKey + ']"');
            $checkbox.prop("checked", false);
            $checkbox.trigger('change');
          })
        });

        let $azFilter = $('.az-filter li a').each(function() {
          let $this = $(this);

          $this.on("click", function(e) {
            e.preventDefault();
            let searchValue = $(this).data('search-value');
            $('input[data-drupal-selector="edit-title"]').val(searchValue).trigger("change");
          })
        });

        $('.view-id-homepage_resource.view-display-id-listing').attr('data-js-is-ran', 1);
      }
    }
  };
})(jQuery, Drupal, once);