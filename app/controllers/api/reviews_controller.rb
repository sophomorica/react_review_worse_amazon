class Api::ReviewsController < ApplicationController
  before_action set_item:
  before_action set_rev:, only: [:show, :update, :destroy]

  def index
    render json: @item.reviews
  end

  def show
    render json: @rev
  end

  def create
    rev = @item.reviews.new(rev_params)
    if rev.save
      render json: rev
    else
      render json: rev.errors, status: 422
    end
  end

  def update
    if @rev.update(rev_params)
      render json: @rev
    else
      render json: @rev.errors, status: 422
    end
  end

  def destroy
    @rev.destroy
  end

  private 
  
  def set_rev
    @rev = Review.find(params[:id])
  end

  def rev_params
    params.require(:item).permit(:title, :body, :author, :image_url)
  end

  def set_item
    @item = Item.find(:item_id)
  end

end
