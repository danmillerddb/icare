class SitesController < ApplicationController
  before_filter :authenticate_user!, :except => ['impress', 'post_to_wall']
  # GET /sites
  # GET /sites.json
  def index
    @sites = current_user.sites.all
    @site = current_user.sites.new
    
  
    
    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @sites }
    end
  end
  
  
  def post_to_wall
    session[:icare_referrer] = request.env['HTTP_REFERER']
    puts "referrer: " + session[:icare_referrer]
    respond_to do |format|
      format.html 
      format.json { render json: @sites }
    end
  end
  
  
  def return_to_referrer
    puts "referrer return: " + session[:icare_referrer]
 
    if session[:icare_referrer].nil? || session[:icare_referrer] == '' then
       redirect_to '/'
    else
       redirect_to session[:icare_referrer].to_s
    end
  end
  
  # GET /sites/1.json
  def impress
      @user = User.find(params[:owner])
      @site = @user.sites.find(params[:site_id]) # :owner = user's id
 
=begin    
    if not current_user.voted?(@site)
       current_user.vote(@site, :up)
              
      @support = @site.supports.new
      
      @support.ip_address = request.env['REMOTE_ADDR'] if request.env['REMOTE_ADDR'].present?
      @support.save
    end    
=end   
       
       @site.votes['count'] += 1
       @site.save
       @support = @site.supports.new
      
      @support.ip_address = request.env['REMOTE_ADDR'] if request.env['REMOTE_ADDR'].present?
      @support.save
        
  
  
    respond_to do |format|
      #format.html # show.html.erb
     # format.json { render json: @site }
      format.js { render :nothing => true }
    end
  end


  # GET /sites/1
  # GET /sites/1.json
  def show
    @site = current_user.sites.find(params[:id])
    @vote_count = @site.votes_count
    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @site }
    end
  end

  # GET /sites/new
  # GET /sites/new.json
  def new
    @site = current_user.sites.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @site }
    end
  end

  # GET /sites/1/edit
  def edit
    @site = current_user.sites.find(params[:id])
  end

  # POST /sites
  # POST /sites.json
  def create
  #  @site = params[:site]
  #  @site['tags'] = []
  #  @site['tags'] = params[:site][:tags].split(' ')
    @site = current_user.sites.new(params[:site])

    respond_to do |format|
      if @site.save
        format.html { redirect_to sites_url, notice: 'Site was successfully created.' }
        format.json { render json: @site, status: :created, location: @site }
      else
        format.html { render action: "new" }
        format.json { render json: @site.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /sites/1
  # PUT /sites/1.json
  def update
    @site = current_user.sites.find(params[:id])
    
   # @site_temp['tags'] = []
   # @site_updated['tags'] = params[:site][:tags].split(' ')
    
    
    respond_to do |format|
      if @site.update_attributes(params[:site])
        format.html { redirect_to sites_url }
        format.json { head :ok }
      else
        format.html { render action: "edit" }
        format.json { render json: @site.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /sites/1
  # DELETE /sites/1.json
  def destroy
    @site = current_user.sites.find(params[:id])
    @site.destroy

    respond_to do |format|
      format.html { redirect_to sites_url }
      format.json { head :ok }
    end
  end
end
