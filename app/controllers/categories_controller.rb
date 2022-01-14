class CategoriesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    before_action :authorize

    # GET
    def index
        categories = Category.all
        render json: categories
    end

    # POST
    def create
        category = Category.create!(category_params)
        render json: category
    end

    private

    def render_unprocessable_entity(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def category_params
        params.permit(:id, :category_name)
    end

    def authorize
        return render json: { errors: ["Not authorized"] }, status: :unauthorized unless session.include? :user_id
    end

end
