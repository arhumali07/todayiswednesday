class SettingsController < ApplicationController
    # include ShopifyApp::Authenticated
    # skip_before_action :shopify_session

    def new
        @setting = Setting.new

    end
    
    def create 
        @setting = Setting.create(params_new)
        redirect_to settings_path
    end

    def index
        @settings = Setting.first
        return render json: { random_param_name: "Random event created successfully!",data: @settings}

    #   return render json: { random_param_name: "Random event created successfully!"}
        
    
    end
    def show 
        # @setting = Setting.find(params[:id])
        return render json: { random_param_name: "nested event created successfully!"}

    end


    private
        def params_new
            params.require(:setting).permit(:name)
        end
end