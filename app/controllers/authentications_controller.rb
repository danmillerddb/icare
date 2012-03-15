class AuthenticationsController < ApplicationController
  # GET /authentications
  # GET /authentications.json

  def index
    @authentications = Authentication.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @authentications }
    end
  end

  # GET /authentications/1
  # GET /authentications/1.json
  def show
    @authentication = Authentication.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @authentication }
    end
  end

  # GET /authentications/new
  # GET /authentications/new.json
  def new
    @authentication = Authentication.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @authentication }
    end
  end

  # GET /authentications/1/edit
  def edit
    @authentication = Authentication.find(params[:id])
  end

  # POST /authentications
  # POST /authentications.json
  def create
 

   # render :text => request.env["omniauth.auth"].to_yaml
   #render :text =>request.env["omniauth.auth"].to_yaml
   
   @url = 'https://graph.facebook.com/' + request.env["omniauth.auth"]["uid"] + '/method/feed?access_token=' + request.env["omniauth.auth"]["credentials"]["token"] + '&message=icaretextmessage'
   @url = URI::encode(@url)
   #req = Net::HTTP::Post.new(url)
   #req.form_data = []
   #req.basic_auth url.user, url.password if url.user
   #con = Net::HTTP.new(url)
   #con.use_ssl = true
   #con.start {http| http.request(req) }
   
     respond_to do |format|
        format.html 
     end
  end

  # PUT /authentications/1
  # PUT /authentications/1.json
  def update
    @authentication = Authentication.find(params[:id])

    respond_to do |format|
      if @authentication.update_attributes(params[:authentication])
        format.html { redirect_to @authentication, notice: 'Authentication was successfully updated.' }
        format.json { head :ok }
      else
        format.html { render action: "edit" }
        format.json { render json: @authentication.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /authentications/1
  # DELETE /authentications/1.json
  def destroy
    @authentication = Authentication.find(params[:id])
    @authentication.destroy

    respond_to do |format|
      format.html { redirect_to authentications_url }
      format.json { head :ok }
    end
  end
end
