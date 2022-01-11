class GroupsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    before_action :authorize

    def create

    end

    def show

    end

    def user_groups
        user = User.find_by(id: session[:user_id])
        groups = user.groups
        render json: groups
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
