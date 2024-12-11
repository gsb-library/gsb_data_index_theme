<?php
function gsb_data_index_theme_form_system_theme_settings_alter(&$form, \Drupal\Core\Form\FormStateInterface $form_state, $form_id = NULL) {
  // Work-around for a core bug affecting admin themes. See issue #943212.
  if (isset($form_id)) {
    return;
  }

  $form['versions_past'] = array(
    '#type'          => 'textfield',
    '#title'         => t('Past Version Text'),
    '#default_value' => theme_get_setting('versions_past'),
    '#description'   => t("This text shows below the versions selector if the selected version isn't the current version."),
  );
}
