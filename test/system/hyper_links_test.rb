require "application_system_test_case"

class HyperLinksTest < ApplicationSystemTestCase
  setup do
    @hyper_link = hyper_links(:one)
  end

  test "visiting the index" do
    visit hyper_links_url
    assert_selector "h1", text: "Hyper links"
  end

  test "should create hyper link" do
    visit hyper_links_url
    click_on "New hyper link"

    fill_in "Display name", with: @hyper_link.display_name
    fill_in "Profile", with: @hyper_link.profile_id
    fill_in "Url", with: @hyper_link.url
    click_on "Create Hyper link"

    assert_text "Hyper link was successfully created"
    click_on "Back"
  end

  test "should update Hyper link" do
    visit hyper_link_url(@hyper_link)
    click_on "Edit this hyper link", match: :first

    fill_in "Display name", with: @hyper_link.display_name
    fill_in "Profile", with: @hyper_link.profile_id
    fill_in "Url", with: @hyper_link.url
    click_on "Update Hyper link"

    assert_text "Hyper link was successfully updated"
    click_on "Back"
  end

  test "should destroy Hyper link" do
    visit hyper_link_url(@hyper_link)
    click_on "Destroy this hyper link", match: :first

    assert_text "Hyper link was successfully destroyed"
  end
end
