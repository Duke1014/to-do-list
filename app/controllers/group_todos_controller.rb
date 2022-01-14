class GroupTodosController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    before_action :authorize 

    # GET
    # def user_todos
    #     user = User.find_by(id: session[:user_id])
    #     todos = user.todos
    #     render json: todos
    # end

    # POST
    def create
        user = User.find_by(id: session[:user_id])
        group_todo = user.group_todos.create!(group_todo_params)
        render json: todo, status: :created
    end

    # PATCH

    # DELETE

    private

    def render_unprocessable_entity(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def authorize
        return render json: { errors: ["Not Authorized"] }, status: :unauthorized unless session.include? :user_id
    end

    def group_todo_params
        params.permit(:id, :content, :is_done, :category_id, :group_id)
    end

end
