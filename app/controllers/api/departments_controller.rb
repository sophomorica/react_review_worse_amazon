class Api::DepartmentsController < ApplicationController
  before_action :set_dep, only: [:show, :update, :destroy]

  def index
    render json: Department.all
  end

  def show
    render json: @dep
  end
  def create
    dep = Department.new(dep_params)
    if dep.save
      render json: dep
    else
      render json: dep.errors, status: 422
    end
  end
  def update
    if @dep.update(dep_params)
      render json: @dep
    else
      render json: @dep.errors, status: 422
    end
  end
  
  def destroy
    @dep.destroy
  end

  private
  def set_dep
    @dep = Department.find(params[:id])
  end
  
  def dep_params
    params.require(:department).permit(:name)
  end
end
