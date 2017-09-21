class Api::NotesController < ApplicationController
  before_action :set_api_note, only: [:show, :update, :destroy]

  # GET /api/notes
  def index
    @api_notes = Note.all

    render json: @api_notes
  end

  # GET /api/notes/1
  def show
    render json: @api_note
  end

  # POST /api/notes
  def create
    @api_note = Note.new(api_note_params)

    if @api_note.save
      render json: @api_note, status: :created
    else
      render json: @api_note.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/notes/1
  def update
    if @api_note.update(api_note_params)
      render json: @api_note
    else
      render json: @api_note.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/notes/1
  def destroy
    @api_note.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_note
      @api_note = Note.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def api_note_params
      params.fetch(:note).permit(:name, :description)
    end
end
