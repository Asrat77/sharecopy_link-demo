require "test_helper"

class HyperLinksControllerTest < ActionDispatch::IntegrationTest
  setup do
    @hyper_link = hyper_links(:one)
  end

  test "should get index" do
    get hyper_links_url
    assert_response :success
  end

  test "should get new" do
    get new_hyper_link_url
    assert_response :success
  end

  test "should create hyper_link" do
    assert_difference("HyperLink.count") do
      post hyper_links_url, params: { hyper_link: { display_name: @hyper_link.display_name, profile_id: @hyper_link.profile_id, url: @hyper_link.url } }
    end

    assert_redirected_to hyper_link_url(HyperLink.last)
  end

  test "should show hyper_link" do
    get hyper_link_url(@hyper_link)
    assert_response :success
  end

  test "should get edit" do
    get edit_hyper_link_url(@hyper_link)
    assert_response :success
  end

  test "should update hyper_link" do
    patch hyper_link_url(@hyper_link), params: { hyper_link: { display_name: @hyper_link.display_name, profile_id: @hyper_link.profile_id, url: @hyper_link.url } }
    assert_redirected_to hyper_link_url(@hyper_link)
  end

  test "should destroy hyper_link" do
    assert_difference("HyperLink.count", -1) do
      delete hyper_link_url(@hyper_link)
    end

    assert_redirected_to hyper_links_url
  end
end
