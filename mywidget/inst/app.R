library(shiny)

ui <- fluidPage(
  h1("Hello"),
  textInput("sometext", "Enter text", value  = "this is a big text"),
  verbatimTextOutput("clicked"),
  mywidgetOutput("this")
)


server <- function(input, output, session){

  output$this <- renderMywidget({
    mywidget(input$sometext)
  })

  output$clicked <- renderText({
    input$mywidget_clicked
  })

}

shiny::shinyApp(ui, server)
