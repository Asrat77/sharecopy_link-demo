class ProfilesController < ApplicationController
  before_action :set_profile, only: %i[ show edit update destroy ]

  inertia_share flash: -> { flash.to_hash }

  # GET /profiles
  def index
    @profiles = Profile.all
    render inertia: 'Profile/Index', props: {
      profiles: @profiles.map do |profile|
        serialize_profile(profile)
      end
    }
  end

  # GET /profiles/1
  def show
    render inertia: 'Profile/Show', props: {
      profile: serialize_profile(@profile),
      hyper_links: HyperLink.where(profile: @profile.id),
      user_name: @profile.user.name
    }
  end

  # GET /profiles/new
  def new
    @profile = Profile.new
    render inertia: 'Profile/New', props: {
      profile: serialize_profile(@profile)
    }
  end

  # GET /profiles/1/edit
  def edit
    render inertia: 'Profile/Edit', props: {
      profile: serialize_profile(@profile)
    }
  end

  # POST /profiles
  def create
    @profile = Profile.new(profile_params)

    if @profile.save
      redirect_to @profile, notice: "Profile was successfully created."
    else
      redirect_to new_profile_url, inertia: { errors: @profile.errors }
    end
  end

  # PATCH/PUT /profiles/1
  def update
    if @profile.update(profile_params)
      redirect_to @profile, notice: "Profile was successfully updated."
    else
      redirect_to edit_profile_url(@profile), inertia: { errors: @profile.errors }
    end
  end

  # DELETE /profiles/1
  def destroy
    @profile.destroy!
    redirect_to profiles_url, notice: "Profile was successfully destroyed."
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_profile
      @profile = Profile.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def profile_params
      params.require(:profile).permit(:note, :phone, :email, :user_id)
    end

    def serialize_profile(profile)
      profile.as_json(only: [
        :id, :note, :phone, :email, :user_id
      ])
    end
end
