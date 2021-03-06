import * as ko from "knockout";
import { SurveyModel } from "../survey";
import { Survey } from "../knockout/kosurvey";
import { SurveyWindow } from "../knockout/koSurveyWindow";
import jQuery from "jquery";
import { updateSurveyProps } from "../utils/updateSurveyProps";

jQuery["fn"].extend({
  Survey: function(props) {
    this.each(function() {
      var model = props.model;
      updateSurveyProps(model, props);
      model.render(this);
    });
  },

  SurveyWindow: function(props) {
    this.each(function() {
      var model = props.model;
      updateSurveyProps(model, props);
      var survey = new SurveyWindow(null, model);
      if(props.expanded !== undefined) {
        survey.isExpanded = props.expanded;
      }
      survey.show();
    });
  }
});

SurveyModel.platform = "jquery";

export * from "./knockout";
