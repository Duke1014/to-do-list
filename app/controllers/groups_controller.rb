class GroupsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    before_action :authorize

    # GET
    def index
        groups = Group.all
        render json: groups
    end

    def user_groups
        user = User.find_by(id: session[:user_id])
        groups = user.groups
        render json: groups
    end

    # POST
    def create
        user = User.find_by(id: session[:user_id])
        group = user.groups.create!(group_params)
        render json: group, status: :created
    end

    # PATCH
    def add_user_to_group
        user = User.find_by(id: session[:user_id])
        group = Group.find_by(id: params[:id])
        if group
            if user.groups.find_by(id: params[:id]) === group
                render json: { error: "Group already assigned to User" }, status: :method_not_allowed
            else
                user.groups<<(group)
            end
        else
            render json: { error: "Group Not Found" }, status: :not_found
        end
    end

    private

    def render_unprocessable_entity(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def authorize
        return render json: { errors: ["Not authorized"] }, status: :unauthorized unless session.include? :user_id
    end

    def group_params
        params.permit(:id, :group_name)
    end
end
