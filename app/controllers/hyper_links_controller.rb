class HyperLinksController < ApplicationController
  before_action :set_hyper_link, only: %i[ show edit update destroy ]

  inertia_share flash: -> { flash.to_hash }

  # GET /hyper_links
  def index
    @hyper_links = HyperLink.all
    render inertia: 'HyperLink/Index', props: {
      hyper_links: @hyper_links.map do |hyper_link|
        serialize_hyper_link(hyper_link)
      end
    }
  end

  # GET /hyper_links/1
  def show
    render inertia: 'HyperLink/Show', props: {
      hyper_link: serialize_hyper_link(@hyper_link)
    }
  end

  # GET /hyper_links/new
  def new
    @hyper_link = HyperLink.new
    render inertia: 'HyperLink/New', props: {
      hyper_link: serialize_hyper_link(@hyper_link)
    }
  end

  # GET /hyper_links/1/edit
  def edit
    render inertia: 'HyperLink/Edit', props: {
      hyper_link: serialize_hyper_link(@hyper_link)
    }
  end

  # POST /hyper_links
  def create
    @hyper_link = HyperLink.new(hyper_link_params)

    if @hyper_link.save
      redirect_to @hyper_link, notice: "Hyper link was successfully created."
    else
      redirect_to new_hyper_link_url, inertia: { errors: @hyper_link.errors }
    end
  end

  # PATCH/PUT /hyper_links/1
  def update
    if @hyper_link.update(hyper_link_params)
      redirect_to @hyper_link, notice: "Hyper link was successfully updated."
    else
      redirect_to edit_hyper_link_url(@hyper_link), inertia: { errors: @hyper_link.errors }
    end
  end

  # DELETE /hyper_links/1
  def destroy
    @hyper_link.destroy!
    redirect_to hyper_links_url, notice: "Hyper link was successfully destroyed."
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_hyper_link
      @hyper_link = HyperLink.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def hyper_link_params
      params.require(:hyper_link).permit(:display_name, :url, :profile_id)
    end

    def serialize_hyper_link(hyper_link)
      hyper_link.as_json(only: [
        :id, :display_name, :url, :profile_id
      ])
    end
end
