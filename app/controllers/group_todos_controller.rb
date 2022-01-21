require 'pry'

class GroupTodosController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    before_action :authorize 

    # GET
    def show_todos
        group = Group.find_by(id: params[:id])
        todos = group.group_todos
        render json: todos
    end

    # POST
    def create
        group = Group.find_by(id: params[:group_id])
        group_todo = group.group_todos.create!(group_todo_params)
        render json: group_todo, status: :created
    end

    # PATCH
    def update
        group_todo = GroupTodo.find_by(id: params[:id])
        if group_todo
            group_todo.update(group_todo_params)
            render json: group_todo
        else
            render json: { error: "Todo not found" }, status: :not_found
        end
    end

    # DELETE
    def destroy
        group_todo = GroupTodo.find_by(id: params[:id])
        group_todo.destroy
        head :no_content
    end

    private

    def render_unprocessable_entity(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def authorize
        return render json: { errors: ["Not Authorized"] }, status: :unauthorized unless session.include? :user_id
    end

    def group_todo_params
        params.require(:group_todo).permit(:content, :is_done, :category_id, :group_id, category_attributes: [:category_name])
    end

end