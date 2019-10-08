function settingsComponent(props) {
  return (
    <Page>
      <Section
        title={
          <Text bold align="center">
            App Settings
          </Text>
        }
      />
      <Toggle
         settingsKey="showSecs"
         label="show Seconds (not yet implemented)"
      />
    </Page>
  );
}

registerSettingsPage(settingsComponent);
