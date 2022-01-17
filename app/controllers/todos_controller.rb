class TodosController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    before_action :authorize 

    # GET
    def user_todos
        user = User.find_by(id: session[:user_id])
        todos = user.todos
        render json: todos
    end

    # POST
    def create
        user = User.find_by(id: session[:user_id])
        todo = user.todos.create!(todo_params)
        render json: todo, status: :created
    end

    # PATCH
    def update
        todo = Todo.find_by(id: params[:id])
        if todo
            todo.update(todo_params)
            render json: todo
        else
            render json: { error: "Todo not found" }, status: :not_found
        end
    end

    # DELETE
    def destroy
        todo = Todo.find_by(id: params[:id])
        todo.destroy
        head :no_content
    end

    private

    def render_unprocessable_entity(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def authorize
        return render json: { errors: ["Not Authorized"] }, status: :unauthorized unless session.include? :user_id
    end

    def todo_params
        params.permit(:id, :content, :is_done, :category_id)
    end

end
